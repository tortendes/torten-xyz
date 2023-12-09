<script type="ts">
    import '../style.css'
    import NavBar from '../components/NavBar.svelte';
    import NewNavBar from '../components/NewNavBar.svelte';
</script>

<div class="Layout">
    <NewNavBar></NewNavBar>
    <main>
        <slot />
    </main>
</div>