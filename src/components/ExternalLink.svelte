<script lang="ts">
    export let href: string;
</script>

<a href={href} class="text-lime-500 hover:underline" referrerpolicy="no-referrer" target="_blank">
    <slot />
</a>