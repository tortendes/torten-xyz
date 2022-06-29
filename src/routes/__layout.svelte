<script>
    import '../app.css'
</script>

<div class="flex flex-col h-screen">
  <nav>
      <div>
	  <a href="/">
	      <img src="/hs-static/torten-whole-white.webp" class="w-36" alt="Torten Logo">
	  </a>
      </div>
      <ul>
	  <li>
	      <a href="/articles/browse">
		  Articles
	      </a>
	  </li>
	  <li>
	      <a href="/projects">
		  Projects
	      </a>
	  </li>
	  <li>
	      <a href="/contact">
		  Contact
	      </a>
	  </li>
      </ul>
  </nav>
  <div class="md:flex md:justify-center px-3 md:px-0 flex-grow">
      <div class="md:w-1/2 mt-6">
	<slot></slot>
      </div>
  </div>
  <footer>
      <p>&copy; 2022 All Rights Reserved.</p>
  </footer>
</div>


<style>
    nav {
        @apply bg-[#E06806] px-5 py-3 flex flex-col md:flex-row items-center md:justify-between
    }
    nav ul {
        @apply mt-5 md:mt-0 flex items-center justify-center gap-5 text-white
    }
    nav ul li a {
        @apply hover:underline hover:underline-offset-4 focus:underline-offset-1
    }
    footer {
        @apply bg-zinc-800 px-7 py-2 text-white
    }
</style>
