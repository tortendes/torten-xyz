<script lang="ts">
    import '../style.css'
    import LineSeperator from '../components/LineSeperator.svelte';
	import Header from '../components/Header.svelte';
    import HomeCards from '../components/HomeCards.svelte';
	import ExternalLink from '../components/ExternalLink.svelte';
</script>

<head>
    <title>「Home」- Torten</title>
    <meta property="og:title" content="「Home」">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://torten.xyz">
</head>

<main>
    <div class="bg-header min-h-screen h-screen bg-cover grid place-items-center">
        <div class="px-4 md:px-0 md:w-1/2 flex items-center justify-center flex-col">
        <h1 class="text-3xl md:text-5xl tracking-tighter text-zinc-900 font-medium text-center md:leading-none">Student by day, Streamer&#47;Web Dev at Night</h1>
        <p class="text-zinc-800 text-center text-lg md:text-xl mt-3.5 font-light md:leading-tight">Hi, I&#39;m Torten. I create stunning and unique websites for everyone, creators, brands, and anything of the like. Oh and I stream too, sometimes.</p>
        <a href="/contact">
            <button class="mt-6 px-12 py-4 bg-zinc-900 text-white rounded-md">
                <span>Get In Touch</span>
            </button>
        </a>
        </div>
    </div>
<div class="px-10 mt-4">
    <div class="main-body">
        <Header title="About thyself" subtitle="about"/>
        <div class="grid grid-cols-2">
            <div>
                <img src="/trtn-static/download.jpg" alt="Not my Face.">
            </div>
            <div class="flex flex-col gap-4">
                <p>Hi! I’m Torten, a random guy in the internet with a knowledge of web development, and some bit of streaming.</p>
                <p>I worked on things like <ExternalLink href="https://github.com/tortendes/tortens-notion-widgets">Notion Widgets</ExternalLink>, <ExternalLink href="https://weather-png.torten.xyz">weather.png</ExternalLink>, and other nifty stuff at my <ExternalLink href="https://github.com/tortendes">GitHub</ExternalLink></p>
                <p>Oh! I also stream too, I don't have a consistent schedule yet but you can either see me on <ExternalLink href="https://twitch.tv/torten_png">Twitch</ExternalLink> or <ExternalLink href="https://youtube.com/@tortendes">YouTube</ExternalLink></p>
            </div>
        </div>

    </div>
</div>
<footer class="bg-[#222222] text-white px-16 py-4 mt-8">
    <p>&copy; All rights reserved.</p>
</footer>
</main>
