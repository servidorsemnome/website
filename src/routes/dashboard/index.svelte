<script lang="ts">
  import { DASHBOARD_PAGE_TITLE } from '$lib/modules/dashboard';
  import { IDENTITY } from '$lib/modules/ory';

  $DASHBOARD_PAGE_TITLE = 'Identidade';
</script>

<pre>{JSON.stringify($IDENTITY, null, 2)}</pre>
