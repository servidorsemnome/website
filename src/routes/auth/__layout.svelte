<div class="container">
  <main class="main">
    <header class="header">
      <a href="/" class="logo">
        <img src="/ssn-icon.png" alt="" />
      </a>
    </header>
    <slot />
  </main>
  <aside class="featured-image" />
</div>

<style lang="sass">
  .container
    display: flex
    width: 100%
    height: 100%

    .featured-image
      flex-grow: 1
      height: 100%
      background-image: url('/fllmall.webp')
      background-position: center
      background-repeat: no-repeat
      background-size: cover

    .main
      display: flex
      flex-direction: column
      gap: 2rem
      flex-shrink: 0
      width: 36rem
      height: 100%
      padding: 2rem

      .logo
        display: flex
        width: fit-content

        img
          height: 5rem
          pointer-events: none
          user-select: none
</style>
