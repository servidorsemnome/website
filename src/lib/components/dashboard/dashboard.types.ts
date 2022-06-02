import type { SvelteComponent } from 'svelte';

export type DashboardMenuItem = {
  label: string;
  href: string;
  target?: string;
  onClick?: () => void;
  icon: typeof SvelteComponent | string;
  active?: boolean;
  isDangerous?: boolean;
};
