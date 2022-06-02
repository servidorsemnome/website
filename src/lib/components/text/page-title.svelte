<script lang="ts">
  export let pretitle = '',
    title = '';
</script>

<div class="page-title">
  {#if !!pretitle.length}
    <p class="pretitle">{pretitle}</p>
  {/if}
  <h1 class="title">{title}</h1>
</div>

<style lang="sass">
  @import '../../../sass/vars'
  
  .pretitle
    font-weight: 600
    text-transform: uppercase
    color: $muted-text
    letter-spacing: .5px
    margin-bottom: .25rem

  .title
    font-size: 1.75rem
</style>
