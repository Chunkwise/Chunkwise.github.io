// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Chunkwise",
      favicon: "/favicon.svg",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/chunkwise",
        },
      ],
      sidebar: [
        {
          label: "Case Study",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example", slug: "case_study/example" },
          ],
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "sapphire" },
          light: { flavor: "latte", accent: "sapphire" },
        }),
      ],
    }),
  ],
});
