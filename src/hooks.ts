import { getIdentity } from '$lib/modules/kratos';
import type { GetSession, Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = event.request.headers.get('cookie') || '';
  const identity = await getIdentity(cookies);
  if (identity) event.locals.identity = identity;
  return await resolve(event);
};

export const getSession: GetSession = async (event) => ({
  identity: event.locals?.identity || null,
});
