// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://Chunkwise.github.io",
  vite: {
    assetsInclude: ["**/*.lottie"],
  },
  integrations: [
    starlight({
      title: "Chunkwise",
      favicon: "/favicon.ico",
      logo: {
        src: "/src/assets/logos/logo.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/chunkwise",
        },
      ],
      components: {
        Header: "./src/components/CustomHeader.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ToggleTheme.astro",
      },
      sidebar: [
        {
          label: "Overview",
          link: "/case_study/overview/",
        },
        {
          label: "Background",
          link: "/case_study/background/",
        },
        {
          label: "Introducing Chunkwise",
          link: "/case_study/introducing_chunkwise/",
        },
        {
          label: "Architecture",
          link: "/case_study/architecture/",
        },
        {
          label: "Design Decisions and Challenges",
          link: "/case_study/design_decisions_and_challenges/",
        },
        {
          label: "Walkthrough",
          link: "/case_study/walkthrough/",
        },
        {
          label: "Future Work",
          link: "/case_study/future_work/",
        },
      ],
      tableOfContents: {
        maxHeadingLevel: 4,
      },
      routeMiddleware: "./src/routeData.ts",
      plugins: [
        starlightImageZoom(),
        starlightThemeFlexoki({
          accentColor: "blue",
        }),
      ],
    }),
  ],
});
