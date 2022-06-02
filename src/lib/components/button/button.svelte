<script lang="ts">
  export let href = '',
    type = '',
    primary = false,
    rgb: [number, number, number] | null = null;

  let style = !!rgb ? `--highlight:${rgb.join(',')}` : null;
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  on:click
  href={href || null}
  {type}
  {style}
  class="button"
  class:primary
>
  <slot />
</svelte:element>

<style lang="sass">
  @import '../../../sass/vars'

  .button
    position: relative
    display: flex
    justify-content: center
    align-items: center
    gap: .5rem
    height: 3.25rem
    padding: 0 1rem
    color: $muted-text
    text-decoration: none
    background-color: $background
    border: 1px solid rgba($muted-text, .2)
    border-radius: .75rem
    cursor: pointer
    overflow: hidden
    transition: all .2s ease

    &:hover
      color: rgb(var(--highlight))
      border-color: rgb(var(--highlight))
      background-color: rgba(var(--highlight), .1)

    &.primary
      background-color: $primary
      color: #fff
      font-weight: 600
      text-transform: uppercase
      letter-spacing: .5px
      border: none

    :global(svg)
      height: 1.25rem
      width: 1.25rem
</style>
