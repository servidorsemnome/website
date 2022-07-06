<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { getLogoutUrl } from '$lib/modules/kratos';
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
      href: '/dashboard',
      icon: SmileIcon,
      active: $page.url.pathname == '/dashboard',
    },
    {
      label: 'Meu perfil',
      href: '/dashboard/profile',
      icon: UserIcon,
      active: $page.url.pathname == '/dashboard/profile',
    },
    {
      label: 'Minha conta',
      href: '/dashboard/account',
      icon: CogIcon,
      active: $page.url.pathname == '/dashboard/account',
    },
    {
      label: 'Personagens',
      href: '/dashboard/characters',
      icon: CreeperIcon,
      active: $page.url.pathname == '/dashboard/characters',
    },
    {
      label: 'Inventário',
      href: '/dashboard/inventory',
      icon: BackpackIcon,
      active: $page.url.pathname == '/dashboard/inventory',
    },
    {
      label: 'Segurança',
      href: '/dashboard/security',
      icon: PasswordIcon,
      active: $page.url.pathname == '/dashboard/security',
    },
    {
      label: 'Sessões',
      href: '/dashboard/sessions',
      icon: ShieldCheckIcon,
      active: $page.url.pathname == '/dashboard/sessions',
    },
    {
      label: 'Conexões',
      href: '/dashboard/connections',
      icon: LinkIcon,
      active: $page.url.pathname == '/dashboard/connections',
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
