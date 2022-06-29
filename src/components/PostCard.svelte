<script>
  import dayjs from 'dayjs'
    export let title;
    export let description;
    export let url 
    export let date
</script>

<a href={url} alt={title}>
  <div class="px-3 py-5 shadow hover:shadow-lg rounded-md shadow-gray-600 transition duration-150">
      <h1 class="font-bold text-xl">{title}</h1>
      <h3 class="text-md">
	  {description}
      </h3>
      <span class="text-base mt-3 text-gray-600">Published at {dayjs(date).format('dddd MMMM DD YYYY hh:mm A')}</span>
  </div>
</a>
