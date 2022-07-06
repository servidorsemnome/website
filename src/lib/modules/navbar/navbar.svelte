<script lang="ts">
  import { page } from '$app/stores';
  import { AUTH_URL } from '$lib/env';
  import { IDENTITY } from '$lib/modules/kratos';
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
      href: '/donate',
      icon: DiamondIcon,
      active: $page.url.pathname == '/donate',
    },
    {
      label: 'Etiqueta',
      href: '/rules',
      icon: ScrollIcon,
      active: $page.url.pathname == '/rules',
    },
    {
      label: 'Comunidade',
      href: '/community',
      icon: GroupIcon,
      active: $page.url.pathname == '/community',
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
      href: `${AUTH_URL}/login`,
    },
    {
      label: 'Registrar',
      href: `${AUTH_URL}/register`,
      isButton: true,
    },
  ];

  $: dashboardItems = [
    {
      label: username,
      href: '/dashboard',
      icon: `https://mc-heads.net/head/${username}`,
      active: $page.url.pathname.startsWith('/dashboard'),
    },
  ];

  $: rightItems = $IDENTITY != null ? dashboardItems : authItems;
</script>

<Navbar items={[leftItems, rightItems]} />
