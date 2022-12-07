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
    export const posts = {}
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

<div>
  <h1 class="text-3xl font-medium mb-2">Hello, I'm Torten</h1>
  <p>I am a highschool student with a hobby of web development. I have a blog but please don't expect me to update it regularly.</p>
  <p>I have made several projects over my continuing course of web development, just go to <a href="/projects" class="text-[#E06806]">projects</a> and you'll see all of them.</p>
  <p>I don't really play games but here are some of them that I like(d)</p>
  <ul class="ml-6 list-disc">
    <li>Backbone</li>
    <li>Plague Inc. Evolved</li>
    <li>Portal 2</li>
    <li>Left 4 Dead 2</li>
  </ul>
  <p>I also don't watch that much anime, but again, here's a few that I like(d)</p>
  <ul class="ml-6 list-disc">
    <li>Darwin's Game</li>
    <li>Rising of the Shield Hero</li>
    <li>Paripi Koumei</li>
    <li>Tokyo Ghoul 🤷</li>
  </ul>
  <p>But, in terms of reading manga/manwha/manhua, yeah, I have read alot. Too much so that I'm not gonna list it here, because it may be too many, so uh yeah.</p>
  <p class="mt-2">Anyways, here's links :)</p>
  <div class="mt-3 mb-5 flex justify-between">
    <a href="/projects" class="text-[#E06806]">Articles</a>
    <a href="/projects" class="text-[#E06806]">Projects</a>
    <a href="/projects" class="text-[#E06806]">Socials</a>
    <a href="/projects" class="text-[#E06806]">Contact</a>
  </div>
</div>