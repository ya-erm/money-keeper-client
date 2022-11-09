import { redirect } from '@sveltejs/kit';

import { routes } from '$lib/routes';
import { db, serverError } from '$lib/server';

import type { Action, Actions, PageServerLoad } from './$types';
import { checkUserId } from '$lib/utils';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = checkUserId(locals);

  const groups = await db.userToGroup.findMany({
    where: { userId },
    orderBy: { order: 'asc' },
    include: { group: true },
  });

  return {
    groups: groups.map((g) => g.group),
  };
};

const selectGroup: Action = async ({ request, locals, cookies }) => {
  const data = await request.formData();
  const groupIdString = data.get('groupId');

  if (typeof groupIdString !== 'string' || !groupIdString) {
    return serverError(400, 'BAD_REQUEST', 'Parameter groupId is required');
  }
  const groupId = parseInt(groupIdString);

  if (!groupId || Number.isNaN(groupId)) {
    return serverError(400, 'BAD_REQUEST', 'Parameter groupId must be a number');
  }

  const userId = checkUserId(locals);

  const userInGroup = db.userToGroup.findUnique({
    where: {
      userId_groupId: {
        userId,
        groupId,
      },
    },
  });

  if (!userInGroup) {
    return serverError(403, 'FORBIDDEN', `User #${userId} is not in group #${groupId}`);
  }

  locals.groupId = groupId;

  cookies.set('groupId', groupIdString);

  throw redirect(302, `${routes.groups.path}/${groupId}`);
};

export const actions: Actions = {
  selectGroup,
};
