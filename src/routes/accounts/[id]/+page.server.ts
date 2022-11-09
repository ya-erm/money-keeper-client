import { error, redirect } from '@sveltejs/kit';

import { routes } from '$lib/routes';
import { db, isServerError, serverError } from '$lib/server';
import { checkUserAndGroup, getStringOptionalFormParameter, getStringFormParameter } from '$lib/utils';

import type { Action, Actions, PageServerLoad, RouteParams } from './$types';

const selection = {
  id: true,
  name: true,
  currency: true,
  color: true,
  icon: true,
  ownerId: true,
};

const validate = async ({ params, locals }: { params: RouteParams; locals: App.Locals }) => {
  const { user, groupId } = checkUserAndGroup(locals);

  const accountId = parseInt(params.id);

  if (Number.isNaN(accountId)) {
    throw serverError(400, 'BAD_REQUEST');
  }

  const account = await db.account.findUnique({
    where: { id: accountId },
    select: selection,
  });

  if (!account) {
    throw serverError(404, 'NOT_FOUND');
  }

  if (account.ownerId !== groupId) {
    throw serverError(403, 'FORBIDDEN');
  }

  return {
    user,
    groupId,
    accountId,
    account,
  };
};

export const load: PageServerLoad = async ({ params, locals }) => {
  try {
    const { account } = await validate({ params, locals });

    return { account };
  } catch (e) {
    if (isServerError(e)) throw error(e.status, e.data.error.code);
    throw e;
  }
};

const updateAccount: Action = async ({ request, params, locals }) => {
  try {
    const { accountId } = await validate({ params, locals });

    const data = await request.formData();
    const name = getStringFormParameter(data, 'name');
    const currency = getStringFormParameter(data, 'currency');
    const icon = getStringOptionalFormParameter(data, 'icon');
    const color = getStringOptionalFormParameter(data, 'color');

    await db.account.update({
      where: { id: accountId },
      data: {
        name,
        currency,
        color,
        icon,
      },
      select: selection,
    });

    throw redirect(302, `${routes.accounts.path}#account-card-${accountId}`);
  } catch (e) {
    if (isServerError(e)) return e;
    throw e;
  }
};

const deleteAccount: Action = async ({ params, locals }) => {
  try {
    const { accountId } = await validate({ params, locals });

    await db.account.delete({
      where: { id: accountId },
    });

    throw redirect(302, routes.accounts.path);
  } catch (e) {
    if (isServerError(e)) return e;
    throw e;
  }
};

export const actions: Actions = {
  update: updateAccount,
  delete: deleteAccount,
};
