<script>
  import PostCard from "../../components/PostCard.svelte";
  export let posts
</script>

<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const all = await posts.json()

    return {
      props: {
	posts: all
      }
    }
  }
</script>

<h1 class="text-4xl font-bold mb-5">All Posts</h1>

<ul class="mb-5">
  {#each posts as post}
    <li class="mt-5 first:mt-0">
      <PostCard url={post.path} title={post.meta.title} description={post.meta.description} date={post.meta.date} />
    </li>
  {/each}
</ul>
