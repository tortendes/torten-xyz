import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import mdsvex from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  extensions: [".md", ".svelte"],

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: ['.md']
    }),
  ],
};

export default config;
