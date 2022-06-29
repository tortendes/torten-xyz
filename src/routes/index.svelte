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
</script>


<head>
    <title>「Home」 - Torten</title>
</head>

<div class="md:flex md:justify-center px-3 md:px-0 overflow-hidden">
    <div class="md:w-1/2 mt-6">
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
        </div>
    </div>
</div>

