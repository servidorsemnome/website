<script lang="ts">
  type Link = {
    href: string;
    label: string;
    target?: string;
  };

  export let links: Link[] = [];
</script>

<footer class="footer">
  {#each links as link}
    <a href={link.href} target={link.target}>{link.label}</a>
  {/each}
</footer>

<style lang="sass">
  @import '../../../sass/vars'

  .footer
    display: flex
    flex-direction: column
    gap: .25rem
    margin-top: auto

    a
      width: fit-content
      color: $muted-text
      text-decoration: none

      &:hover
        color: $primary
</style>
