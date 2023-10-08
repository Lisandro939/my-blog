import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://lisandro939.github.io',
  base: '/',
  integrations: [tailwind(), mdx()],
  markdown: {
    rehypePlugins: [[addClasses, {
      "h1": "text-4xl font-sans font-semibold text-white max-w-3xl text-center mt-8 mb-20 w-full",
      "h2": "text-3xl font-semibold text-white max-w-3xl w-full mb-6",
      "h3": "text-2xl font-bold text-white max-w-3xl w-full mb-4",
      "h4": "text-xl font-bold text-white max-w-3xl w-full",
      "h5": "text-sm text-center font-bold text-slate-400 mt-8 max-w-3xl w-full",
      "h6": "text-base font-bold max-w-3xl w-full",
      "p": "text-base text-slate-300 text-start max-w-3xl w-full mb-6",
      "ul": "list-disc list-inside",
      "pre": "bg-gray-800 p-4 rounded-md"
    }]]
  },
  output: "hybrid",
  adapter: vercel()
});