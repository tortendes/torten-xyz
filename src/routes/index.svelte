<script>
    import PostCard from '../components/PostCard.svelte';
    import Typewriter from 'svelte-typewriter'

    const socials = [
      {
	logo: 'Github',
	link: 'https://github.com/tortendes',
	iconLocation: '/hs-logo/src/gh.svg'
      },
      {
	logo: 'Twitter',
	link: 'https://twitter.com/tortenwashere',
	iconLocation: '/hs-logo/src/twtr.svg'
      },
      {
	logo: 'Twitch',
	link: 'https://twitch.tv/tortenwashere',
	iconLocation: '/hs-logo/src/tch.svg'
      },
      {
	logo: 'Email',
	link: 'mailto:talk@torten.xyz',
	iconLocation: '/hs-logo/src/ml.svg'
      },
    ]
    export let posts
</script>

<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const all = await posts.json()

    return {
      props: {
	posts: all
      }
    }
  }
</script>


<head>
    <title>「Home」 - Torten</title>
</head>

<div class="flex items-center text-5xl">
    <h1>Hi</h1>
    <img src="https://static.revolt.chat/emoji/mutant/1f44b-10160a.svg" class="w-12 ml-2" alt="Wave emoji">
    <h1 class="ml-2">I'm</h1>
    <img src="/hs-static/torten-whole-black.webp" class="w-36 ml-3" alt="Logo">
</div>
<h1 class="mt-2 text-2xl md:text-3xl flex items-center">
    <span class="mr-1">I make</span> <Typewriter loop>
	<span>web apps</span>
	<span>mediocre design</span>
	<span>and other stuff</span>
    </Typewriter>
</h1>
<div class="mt-5 flex flex-col items-center justify-center">
    <h1 class="text-3xl font-medium mb-3">Socials</h1>
    <ul class="flex items-center gap-3">
      {#each socials as item}
	<li>
	  <a href={item.link}>
	    <img src={item.iconLocation} alt={`${item.logo} Logo`} class="w-10">
	  </a>
	</li>
      {/each}
    </ul>
</div>
<div>
  <h1 class="text-3xl">Recent Posts</h1>
  <ul>
    {#each posts.slice(0,3) as post}
      <li class="mb-5 last:mb-0">
	<PostCard title={post.meta.title} description={post.meta.description} date={post.meta.date} url={post.path} />
      </li>
    {/each}
    <li class="mb-5">
      <div class="text-center">
	<a href="/articles/browse" class="px-5 py-2 shadow-xl hover:bg-[#E06806] hover:text-white focus:shadow-inner transition duration-150 rounded-full">See All</a>
      </div>
    </li>
  </ul>
</div>

