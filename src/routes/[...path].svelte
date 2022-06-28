<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        code: '404',
      }
    };
  }
</script>

<script>
  import NotFoundComponent from "../components/NotFound.svelte";
  export let code;
</script>


{#if code == '404'} <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
  <NotFoundComponent />
{/if}

