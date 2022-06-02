<script lang="ts">
  export let label = 'ou';
</script>

<div class="separator">{label}</div>

<style lang="sass">
  @import '../../../sass/vars'
  
  .separator
    display: flex
    align-items: center
    gap: 1rem
    margin: 1.25rem 0
    color: $muted-text

    &::before,
    &::after
      content: '',
      height: 1px
      flex-grow: 1
      background-color: rgba($muted-text, .2)
</style>
