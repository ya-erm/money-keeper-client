import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import type { Action, Actions, PageServerLoad } from './$types';

import { db } from '$lib/server/database';
import { apiError } from '$lib/server/apiError';
import { routes } from '$lib/routes';

export const load: PageServerLoad = async ({ locals }) => {
  // redirect user if logged in
  if (locals.user) {
    throw redirect(302, routes.profile.path);
  }
};

const login: Action = async ({ cookies, request }) => {
  const data = await request.formData();
  const login = data.get('login');
  const password = data.get('password');

  if (typeof login !== 'string' || typeof password !== 'string' || !login || !password) {
    return apiError(400, 'BAD_REQUEST', 'Validation error');
  }

  const user = await db.user.findUnique({
    where: { phone: login },
    include: { password: { select: { hash: true } } },
  });

  if (!user) {
    return apiError(403, 'INCORRECT_LOGIN_OR_PASSWORD');
  }

  const correctPassword = await bcrypt.compare(password, user.password?.hash ?? '');

  if (!correctPassword) {
    return apiError(403, 'INCORRECT_LOGIN_OR_PASSWORD');
  }

  const token = await db.authToken.create({
    data: {
      value: crypto.randomUUID(),
      userId: user.id,
    },
  });

  cookies.set('session', token.value, {
    // send cookie for every page
    path: '/',
    // server side only cookie so you can't use `document.cookie`
    httpOnly: true,
    // only requests from same site can send cookies
    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    sameSite: 'strict',
    // only sent over HTTPS in production
    secure: process.env.NODE_ENV === 'production',
    // set cookie to expire after a month
    maxAge: 60 * 60 * 24 * 30,
  });

  throw redirect(302, '/');
};

export const actions: Actions = {
  login,
};
