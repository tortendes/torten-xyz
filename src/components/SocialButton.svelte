<script>
    export let icon;
    export let text;
    export let link;
</script>
<a href={link} target="_blank" class="min-w-full">
<div class="border-2 border-black group hover:border-torten-orange py-2 px-10 hover:bg-torten-orange hover:text-white rounded-md flex justify-center">
        <div class="flex gap-2">
            <img src={icon} alt="Logo" class="group-hover:invert">
            <span>{text}</span>
        </div>
    </div>
</a>