<script>
  import dayjs from 'dayjs'
  export let title
  export let description
  export let date
  export let imageLink
</script>

<head>
  <title>「{title}」 - Torten</title>
</head>

<a href="/" class="text-orange-500">&#x2190; Go Back Home</a>
<header class="mb-5">
  <img src="{imageLink}" alt="{title}" />
  <h1 class="text-3xl font-bold">{title}</h1>
  <h3 class="text-xl font-medium">{description}</h3>
  <span class="text-base text-gray-700">Posted on {dayjs(date).format('dddd MMMM DD YYYY hh:mm A')}</span>
</header>
<slot />
