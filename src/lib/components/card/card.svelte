<div class="card">
  <slot />
</div>

<style lang="sass">
  @import '../../../sass/vars'

  .card
    width: 100%
    height: 100%
    padding: 1rem
    color: $muted-text
    background-color: #fff
    border: 1px solid rgba($muted-text, .2)
    border-radius: .75rem
</style>
