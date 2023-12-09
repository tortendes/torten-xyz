<script lang="ts">
    import '../styles/NavBar.scss'
	import Github from './icons/Github.svelte';
	import Twitch from './icons/Twitch.svelte';
	import Twitter from './icons/Twitter.svelte';
    let isOpen:boolean;
    
    function toggleNavigation(): void {
        isOpen = !isOpen
    }

    let screenWidth: number;
</script>
 
<header class="navigation-bar">
    <div class="image-wrapper">
        <a href="/">
            <img src="/trtn-static/whole-color.svg" alt="Torten Logo">
        </a>
    </div>
    <button class="toggle-button" on:click={toggleNavigation}>
        <span></span>
        <span></span>
        <span class="sr-only">Open Navigation</span>
    </button>
</header>
<div class="navigation-menu {isOpen ? 'open' : ''}">
    <div class="wrapper">
        {#if screenWidth >= 640}
            <div class="pc-left">
                <div class="image-wrapper">
                    <a href="/">
                        <img src="/trtn-static/whole-color.svg" alt="Torten Logo" class="mb-20">
                    </a>
                </div>
                <ul class="main-links">
                    <li>
                        <a href="/news">News</a>
                    </li>
                    <li>
                        <a href="/schedule">Schedule</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <ul class="secondary-links">
                    <li>
                        <a href="/legal/tos">Project's ToS</a>
                    </li>
                    <li>
                        <a href="/legal/privacy">Project Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://tortenworx.xyz">tortenworx</a>
                    </li>
                </ul>
                <small class="absolute bottom-5 left-9">&copy; 2022 All rights reserved. <br> Lahat ng karapatan ay nakalaan.</small>
            </div>
        {/if}
        <div class="right">
            <button class="close" on:click={toggleNavigation}>
                <span class="sr-only">Close Navigation</span>
            </button>
            {#if screenWidth <= 640}

            <div class="image-wrapper">
                <a href="/">
                    <img src="/trtn-static/whole-monochrome-white.svg" alt="Torten Logo" class="mb-20">
                </a>
            </div>
            <ul class="main-links">
                <li>
                    <a href="/articles">Articles</a>
                </li>
                <li>
                    <a href="/schedule">Schedule</a>
                </li>
                <li class="my-0.5"></li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <ul class="secondary-links">
                <li>
                    <a href="/legal/tos">Project's ToS</a>
                </li>
                <li>
                    <a href="/legal/privacy">Project Privacy Policy</a>
                </li>
                <li>
                    <a href="https://tortenworx.xyz">tortenworx</a>
                </li>
            </ul>
            <small class="absolute bottom-5 left-9 text-white">&copy; 2022 All rights reserved. <br> Lahat ng karapatan ay nakalaan.</small>
            {/if}
            <div class="absolute bottom-20 right-5 border-l-2 border-l-white px-2 text-white flex flex-col gap-2">
                <ul>
                    <li>
                        <a href="https://github.com/tortendes">
                            <Github />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://twitter.com/tortenwashere">
                            <Twitter />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://twitch.com/tortenwashere">
                            <Twitch />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="mailto:talk@torten.xyz">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<svelte:window bind:outerWidth={screenWidth}/>
