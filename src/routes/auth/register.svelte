<script lang="ts" context="module">
  import { getRegistrationBrowserUrl } from '$lib/modules/ory';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ session, url }) => {
    if (session?.identity) {
      return {
        status: 302,
        redirect: '/dashboard',
      };
    }

    const flowId = url.searchParams.get('flow');
    const returnTo = url.searchParams.get('return_to') || '';

    if (!flowId) {
      return {
        status: 302,
        redirect: getRegistrationBrowserUrl(returnTo),
      };
    }

    return {};
  };
</script>

<script lang="ts">
  import { FooterLinks, PageTitle } from '$lib/components/text';
  import { RegistrationForm } from '$lib/modules/registration';

  const links = [
    {
      href: '/auth/login',
      label: 'Já possui uma conta?',
    },
  ];
</script>

<PageTitle pretitle="Registrar" title="Boas-vindas ao ssn.gg!" />
<RegistrationForm />
<FooterLinks {links} />
