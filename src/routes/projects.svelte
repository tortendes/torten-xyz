<head>
    <title>「Projects」 - Torten</title>
</head>

<h1 class="text-center text-5xl font-black">Projects</h1>

<div class="grid-group gap-5">
  <div class="card">
    <img src="/hs-static/torten-xyz-promo.png" alt="torten.xyz"  class="w-full">
    <div class="text-group">
      <h1>torten.xyz</h1>
      <h3>My personal website for blogs and stuff.</h3>
      <span class="text-gray-700">You're here</span>
    </div>
  </div>
  <div class="card">
    <img src="/hs-static/atw-prj.png" alt="Torten's Notion Widgets"  class="w-full">
    <div class="text-group">
      <h1>Torten's Notion Widgets</h1>
      <h3>Anime-themed Notion Widgets</h3>
      <a class="flex items-center" href="https://github.com/tortendes/tortens-notion-widgets" target="_blank"><img src="/hs-logo/src/gh.svg" class="w-5 mr-1" alt="Github logo"><span>Github</span></a>
    </div>
  </div>
</div>

<style>
  .grid-group {
    @apply mt-5 grid grid-cols-2 grid-rows-5
  }
  .card {
    @apply rounded-lg shadow-2xl
  }
  .card .text-group {
    @apply px-3 py-2 mb-1
  }
  .card .text-group h1 {
    @apply text-xl font-bold
  }
  .card .text-group h3 {
    @apply text-base font-medium mb-3
  }
</style>
