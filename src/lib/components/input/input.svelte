<script lang="ts">
  export let value = '',
    type = 'text',
    name: string,
    label: string;

  const inputType = (node: any) => {
    node.type = type;
  };
</script>

<div class="input" class:filled={!!value.length}>
  <label for={name}>{label}</label>
  <input bind:value use:inputType {name} />
</div>

<style lang="sass">
  @import '../../../sass/vars'

  .input
    position: relative

    label
      position: absolute
      top: 1rem
      left: 1rem
      padding: 0 .5rem
      color: $muted-text
      background-color: $background
      pointer-events: none
      transition: all .2s ease

    &:focus-within label,
    &.filled label
      top: -0.45rem
      font-size: .9rem

    &:focus-within label
      color: $primary

    input
      width: 100%
      height: 3.25rem
      padding: 0 1rem
      color: $muted-text
      background-color: transparent
      border: 1px solid rgba($muted-text, .2)
      border-radius: .75rem
      transition: all .2s ease

      &:focus
        outline: none
        border-color: $primary
</style>
