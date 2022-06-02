<script lang="ts">
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  import { SpinnerIcon } from '$lib/components/icons';

  export let isLoading = false;
</script>

<form class="form" on:submit|preventDefault>
  <slot />
  {#if isLoading}
    <div class="loading" transition:fade={{ duration: 200, easing: quintOut }}>
      <SpinnerIcon />
    </div>
  {/if}
</form>

<style lang="sass">
  @import '../../../sass/vars'

  .form
    position: relative
    display: flex
    flex-direction: column
    gap: .75rem

    .loading
      position: absolute
      top: 0
      left: 0
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      height: 100%
      background-color: rgba($background, .75)
      color: $primary

      :global(svg)
        width: 2rem
        height: 2rem
</style>
