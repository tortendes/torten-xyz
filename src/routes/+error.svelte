<script lang="ts">
	import { page } from '$app/stores';
	import { Server } from '@sveltejs/kit';
</script>

<main class="min-h-screen bg-slate-800 grid place-items-center text-white">
    <div class="text-center md:w-1/2">
        <h1 class="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{$page.status}</h1>
        <h3 class="text-3xl font-medium">{$page.error?.message}</h3>
        <p class="my-4">
            {#if $page.status === 404}
                The page or resource that you're looking for either does not exist or has been deleted. Please check if you have entered the correct URL.
            { :else if $page.status === 500 }
                A server error has occured. Please wait a few moments then try again.
            { :else }
                A serious error has occured. Please wait a few moments and try again.
            {/if}
        </p>
        <a href="/">
            <button class="bg-black rounded-md text-white px-4 py-2">Go Home</button>
        </a>
    </div>
</main>