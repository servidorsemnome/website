<script lang="ts" context="module">
  import { getLoginBrowserUrl } from '$lib/modules/ory';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ session, url }) => {
    if (session?.identity) {
      return {
        status: 302,
        redirect: '/painel',
      };
    }

    const flowId = url.searchParams.get('flow');
    const returnTo = url.searchParams.get('return_to') || '';

    if (!flowId) {
      return {
        status: 302,
        redirect: getLoginBrowserUrl(returnTo),
      };
    }

    return {};
  };
</script>

<script lang="ts">
  import { FooterLinks, PageTitle } from '$lib/components/text';
  import { LoginForm } from '$lib/modules/login';

  const links = [
    {
      href: '/auth/register',
      label: 'Criar uma conta',
    },
    {
      href: '/auth/recover-password',
      label: 'Esqueceu sua senha?',
    },
  ];
</script>

<PageTitle pretitle="Login" title="É um prazer te ver de novo." />
<LoginForm />
<FooterLinks {links} />
