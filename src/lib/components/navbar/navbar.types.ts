import type { SvelteComponent } from 'svelte';

export type NavbarItem = {
  label: string;
  href: string;
  target?: string;
  isButton?: boolean;
  icon?: typeof SvelteComponent | string;
  active?: boolean;
};
