<script lang="ts">
  import { CopyIcon } from '$lib/components/icons';

  export let serverIp: string;
</script>

<header class="hero">
  <div class="hero-inner">
    <div class="hero-content">
      <a href="/" class="logo">
        <img src="/ssn-icon.png" alt="" class="logo" />
      </a>
      <div class="server-ip" on:click>
        <CopyIcon />
        <div class="server-ip-info">
          <h1>IP: {serverIp}</h1>
          <p>0 jogadores online</p>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="sass">
  @import '../../../sass/vars'

  .hero
    background-image: url('/wither.jpg')
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    height: 20rem

    &-inner
      height: 100%
      background-color: rgba($primary, .5)
      backdrop-filter: blur(.25rem)

    &-content
      display: flex
      justify-content: space-between
      align-items: center
      height: 100%
      max-width: 1080px
      margin: 0 auto

    .logo img
      height: 8rem

    .server-ip
      position: relative
      display: flex
      align-items: center
      background-color: rgba(#000, .25)
      color: #fff
      padding: 1rem
      border-radius: 0.5rem
      gap: .75rem
      cursor: pointer
      overflow: hidden
      transition: all .2s ease

      &:hover
        transform: translateY(-.25rem)

      :global(.ripple)
        position: absolute
        border-radius: 50%
        transform: scale(0)
        animation: ripple .6s linear
        background-color: rgba(#fff, .1)

      :global(svg)
        height: 2.5rem
        width: 2.5rem

      &-info
        flex-shrink: 0

        h1
          font-size: 1.25rem

  @keyframes ripple
    to
      transform: scale(4)
      opacity: 0
</style>
