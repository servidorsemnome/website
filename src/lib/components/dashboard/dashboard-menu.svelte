<script lang="ts">
  import type { DashboardMenuItem } from './dashboard.types';

  export let items: DashboardMenuItem[] = [];
</script>

{#each items as item}
  <a
    href={item.href}
    target={item.target}
    class="menu-item"
    class:active={item.active}
    class:danger={item.isDangerous}
    on:click={item.onClick}
  >
    <svelte:component this={item.icon} />
    {item.label}
  </a>
{/each}

<style lang="sass">
  @import '../../../sass/vars'

  .menu-item
    position: relative
    display: flex
    align-items: center
    gap: .5rem
    padding: .5rem .75rem
    color: $muted-text
    text-decoration: none
    border-radius: .5rem
    transition: all .2s ease

    &.active
      background-color: rgba(#000, .04)
      color: #000

      &::before
        content: ''
        position: absolute
        left: -.5rem
        top: .25rem
        width: .25rem
        border-radius: .5rem
        height: 75%
        background-color: $primary

    &.danger
      color: #dc1600 !important

      &:hover
        background-color: rgba(#dc1600, .06)

    &:hover
      background-color: rgba(#000, .06)
      color: #000

    :global(svg)
      width: 1.25rem
      height: 1.25rem
</style>
