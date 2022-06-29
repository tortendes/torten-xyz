<script>
  import dayjs from 'dayjs'
  export let title
  export let description
  export let date
</script>

<div class="md:flex md:justify-center px-3 md:px-0 overflow-hidden">
  <div class="md:w-1/2 mt-3">
    <a href="/" class="text-orange-500">&#x2190; Go Back Home</a>
    <header class="mb-5">
      <h1 class="text-3xl font-bold">{title}</h1>
      <h3 class="text-xl font-medium">{description}</h3>
      <span class="text-base text-gray-700">Posted on {dayjs(date).format('dddd MMMM DD YYYY hh:mm A')}</span>
    </header>
    <slot />
  </div>
</div>
