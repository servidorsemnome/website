<script lang="ts">
  export let type: string;
</script>

<div class="alert" class:error={type == 'error'}>
  <slot />
</div>

<style lang="sass">

  .alert
    padding: 1rem
    border: 1px solid
    border-radius: .75rem

    &.error
      color: #cc0f35
      border-color: #cc0f35
      background-color: rgba(#cc0f35, .1)
</style>
