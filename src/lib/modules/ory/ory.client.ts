import { KRATOS_URL } from '$lib/env';
import { getNodeAttribute } from './ory.utils';
import type { LoginParams, RegistrationParams } from './ory.types';

export const getLoginFlow = async (flowId: string) => {
  try {
    const resp = await fetch(
      `${KRATOS_URL}/self-service/login/flows?id=${flowId}`,
      {
        credentials: 'include',
      },
    );
    const data = await resp.json();
    if (resp.status != 200) return null;
    return data;
  } catch (error) {
    return null;
  }
};

export const getRegistrationFlow = async (flowId: string) => {
  try {
    const resp = await fetch(
      `${KRATOS_URL}/self-service/registration/flows?id=${flowId}`,
      {
        credentials: 'include',
      },
    );
    const data = await resp.json();
    if (resp.status != 200) return null;
    return data;
  } catch (error) {
    return null;
  }
};

export const submitLoginFlow = async (
  flow: any,
  returnTo: string,
  params: LoginParams,
) => {
  params.csrf_token = getNodeAttribute(flow, 'csrf_token');
  params.method = getNodeAttribute(flow, 'method');

  try {
    const resp = await fetch(
      `${KRATOS_URL}/self-service/login?flow=${flow.id}&return_to=${returnTo}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(params),
      },
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const submitRegistrationFlow = async (
  flow: any,
  returnTo: string,
  params: RegistrationParams,
) => {
  params.csrf_token = getNodeAttribute(flow, 'csrf_token');
  params.method = getNodeAttribute(flow, 'method');
  params.traits.nicknames[0] = params.traits.primaryNickname;

  try {
    const resp = await fetch(
      `${KRATOS_URL}/self-service/registration?flow=${flow.id}&return_to=${returnTo}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(params),
      },
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const getIdentity = async (cookies?: string) => {
  const headers = cookies ? { Cookie: cookies } : undefined;
  try {
    const resp = await fetch(`${KRATOS_URL}/sessions/whoami`, {
      headers,
      credentials: 'include',
    });
    const data = await resp.json();
    if (resp.status != 200) return null;
    return data.identity;
  } catch (error) {
    return null;
  }
};

export const getLogoutUrl = async () => {
  try {
    const resp = await fetch(`${KRATOS_URL}/self-service/logout/browser`, {
      credentials: 'include',
    });
    const data = await resp.json();
    if (resp.status != 200) return null;
    return data;
  } catch (error) {
    return null;
  }
};

export const getLoginBrowserUrl = (returnTo?: string) =>
  `${KRATOS_URL}/self-service/login/browser?return_to=${returnTo}`;

export const getRegistrationBrowserUrl = (returnTo?: string) =>
  `${KRATOS_URL}/self-service/registration/browser?return_to=${returnTo}`;
