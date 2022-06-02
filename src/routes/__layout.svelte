<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = ({ session }) => {
    return {
      props: {
        identity: session?.identity,
      },
    };
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import { IDENTITY } from '$lib/modules/ory';
  import { Hero } from '$lib/modules/hero';
  import { Navbar } from '$lib/modules/navbar';
  import { Container, Section } from '$lib/components/layout';
  import '../sass/minireset.sass';
  import '../sass/global.sass';

  export let identity: any = null;
  $IDENTITY = identity;

  $: isAuthPage = $page.url.pathname.startsWith(`/auth`);
</script>

{#if !isAuthPage}
  <Container>
    <Hero />
    <Navbar />
    <Section>
      <slot />
    </Section>
  </Container>
{:else}
  <slot />
{/if}
