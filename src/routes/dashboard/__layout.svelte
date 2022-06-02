<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = ({ session }) => {
    if (!session?.identity) {
      return {
        status: 302,
        redirect: '/auth/login',
      };
    }

    return {};
  };
</script>

<script lang="ts">
  import { DASHBOARD_PAGE_TITLE } from '$lib/modules/dashboard';
  import { DashboardMenu } from '$lib/modules/dashboard';
  import { Card } from '$lib/components/card';
  import { PageTitle } from '$lib/components/text';
</script>

<PageTitle pretitle="Painel" title={$DASHBOARD_PAGE_TITLE} />

<div class="dashboard">
  <aside class="menu">
    <DashboardMenu />
  </aside>
  <main class="content">
    <Card>
      <slot />
    </Card>
  </main>
</div>

<style lang="sass">
  .dashboard
    display: flex
    gap: 2rem
    margin-top: 2rem

    .menu
      flex-grow: 1

    .content
      width: 50rem
</style>
