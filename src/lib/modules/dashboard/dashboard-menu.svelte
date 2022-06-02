<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { getLogoutUrl } from '$lib/modules/ory';
  import { DashboardMenu } from '$lib/components/dashboard';
  import {
    BackpackIcon,
    CogIcon,
    CreeperIcon,
    LinkIcon,
    LogoutIcon,
    PasswordIcon,
    ShieldCheckIcon,
    SmileIcon,
    UserIcon,
  } from '$lib/components/icons';

  const logout = async () => {
    const data = await getLogoutUrl();
    if (data?.logout_url) goto(data?.logout_url);
  };

  $: items = [
    {
      label: 'Identidade',
      href: '/painel',
      icon: SmileIcon,
      active: $page.url.pathname == '/painel',
    },
    {
      label: 'Meu perfil',
      href: '/painel/perfil',
      icon: UserIcon,
      active: $page.url.pathname == '/painel/perfil',
    },
    {
      label: 'Minha conta',
      href: '/painel/conta',
      icon: CogIcon,
      active: $page.url.pathname == '/painel/conta',
    },
    {
      label: 'Personagens',
      href: '/painel/personagens',
      icon: CreeperIcon,
      active: $page.url.pathname == '/painel/personagens',
    },
    {
      label: 'Inventário',
      href: '/painel/inventario',
      icon: BackpackIcon,
      active: $page.url.pathname == '/painel/inventario',
    },
    {
      label: 'Segurança',
      href: '/painel/seguranca',
      icon: PasswordIcon,
      active: $page.url.pathname == '/painel/seguranca',
    },
    {
      label: 'Sessões',
      href: '/painel/gatekeeper',
      icon: ShieldCheckIcon,
      active: $page.url.pathname == '/painel/gatekeeper',
    },
    {
      label: 'Conexões',
      href: '/painel/conexoes',
      icon: LinkIcon,
      active: $page.url.pathname == '/painel/conexoes',
    },
    {
      label: 'Desconectar',
      href: '#',
      onClick: logout,
      icon: LogoutIcon,
      isDangerous: true,
    },
  ];
</script>

<DashboardMenu {items} />
