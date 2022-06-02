<script lang="ts">
  import type { NavbarItem } from './navbar.types';

  export let items: NavbarItem[][] = [];
</script>

<navbar class="navbar">
  <div class="navbar-inner">
    {#each items as navbarItems}
      <div class="navbar-items">
        {#each navbarItems as item}
          <a
            class:navbar-item={!item.isButton}
            class:navbar-button={item.isButton}
            class:active={item.active}
            href={item.href}
            target={item.target}
          >
            {#if typeof item.icon === 'string'}
              <img src={item.icon} alt="" />
            {:else if item.icon != null}
              <svelte:component this={item.icon} />
            {/if}
            {item.label}
          </a>
        {/each}
      </div>
    {/each}
  </div>
</navbar>

<style lang="sass">
  @import '../../../sass/vars'

  .navbar
    display: flex
    background-color: #fff
    border-bottom: 1px solid rgba($muted-text, .2)

    &-inner
      display: flex
      justify-content: space-between
      width: 100%
      height: 3.25rem
      max-width: 1080px
      margin: 0 auto

    &-items
      display: flex
      align-items: center

    &-item
      position: relative
      display: flex
      align-items: center
      gap: .5rem
      height: 100%
      padding: 0 .75rem
      color: $muted-text
      text-decoration: none
      transition: all .2s ease

      &.active,
      &:hover
        color: #000

      &.active::before
        content: ''
        position: absolute
        bottom: -1px
        left: 0
        width: 100%
        height: 2px
        background-color: $primary

      :global(svg)
        width: 1.25rem
        height: 1.25rem

      img
        width: 1.75rem
        height: 1.75rem
        pointer-events: none
        user-select: none

    &-button
      padding: .5rem .75rem
      background-color: $primary
      color: #fff
      text-decoration: none
      border-radius: .5rem
</style>
