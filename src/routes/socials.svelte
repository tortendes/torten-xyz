<script>
	import SocialButton from "../components/SocialButton.svelte";
	import { text } from "svelte/internal";

</script>
<head>
    <title>「Socials」 - Torten</title>
</head>

<div class="flex flex-col items-center">
    <div class="flex justify-center">
        <img src="/hs-static/torten-whole-black.webp" alt="Torten Logo" class="w-48">
    </div>
    <div class="mt-5 text-lg">
        <p>Hello! My name is Torten. I make websites as a hobby, here are my social media links!</p>
    </div>
    <div class="mt-7 flex flex-col items-center gap-2 md:w-1/2">
        <SocialButton icon="hs-logo/src/gh.svg" text="Github" link="https://github.com/tortendes" />
        <SocialButton icon="hs-logo/src/tch.svg" text="Twitch" link="https://twitch.tv/tortenwashere" />
        <SocialButton icon="hs-logo/src/twtr.svg" text="Twitter" link="https://twitter.com/tortenwashere" />
        <SocialButton icon="hs-logo/src/yt.svg" text="YouTube" link="https://youtube.com/@tortendes" />
        <SocialButton icon="hs-logo/src/al.svg" text="AniList" link="https://anilist.co/user/Torten" />
    </div>
</div>