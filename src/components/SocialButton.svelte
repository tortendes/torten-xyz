<script>
    export let icon;
    export let text;
    export let link;
</script>
<a href={link} target="_blank">
    <div class="w-full mt-2 border-2 border-black hover:border-torten-yellow py-2 px-10 hover:bg-torten-yellow rounded-md flex justify-center">
        <div class="flex gap-2">
            <img src={icon} alt="Logo" class="hover:fill-white">
            <span>{text}</span>
        </div>
    </div>
</a>