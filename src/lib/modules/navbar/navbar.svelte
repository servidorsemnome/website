<script lang="ts">
  import { page } from '$app/stores';
  import { IDENTITY } from '$lib/modules/ory';
  import { Navbar } from '$lib/components/navbar';
  import {
    DiamondIcon,
    DiscordIcon,
    GroupIcon,
    HomeIcon,
    ScrollIcon,
  } from '$lib/components/icons';

  $: username = `${$IDENTITY?.traits?.primaryNickname}`;

  $: leftItems = [
    {
      label: 'Início',
      href: '/',
      icon: HomeIcon,
      active: $page.url.pathname == '/',
    },
    {
      label: 'Doar',
      href: '/doar',
      icon: DiamondIcon,
      active: $page.url.pathname == '/doar',
    },
    {
      label: 'Etiqueta',
      href: '/etiqueta',
      icon: ScrollIcon,
      active: $page.url.pathname == '/etiqueta',
    },
    {
      label: 'Comunidade',
      href: '/comunidade',
      icon: GroupIcon,
      active: $page.url.pathname == '/comunidade',
    },
    {
      label: 'Discord',
      href: 'https://discord.gg/DChTnVTuKp',
      target: '_blank',
      icon: DiscordIcon,
    },
  ];

  const authItems = [
    {
      label: 'Login',
      href: '/auth/login',
    },
    {
      label: 'Registrar',
      href: '/auth/register',
      isButton: true,
    },
  ];

  $: dashboardItems = [
    {
      label: username,
      href: '/painel',
      icon: `https://mc-heads.net/head/${username}`,
      active: $page.url.pathname.startsWith('/painel'),
    },
  ];

  $: rightItems = $IDENTITY != null ? dashboardItems : authItems;
</script>

<Navbar items={[leftItems, rightItems]} />
