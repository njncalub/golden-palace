import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/golden-palace/",
  title: "Golden Palace",
  description:
    "A personal scripture memorization system built on Hebrew pictographs, gematria, PAO library, and mind palace architecture.",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Alphabet", link: "/alphabet/" },
      { text: "GitHub", link: "https://github.com/njncalub/golden-palace" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "What Is This?", link: "/" }],
      },
      {
        text: "Hebrew Alphabet",
        items: [
          { text: "Index", link: "/alphabet/" },
          { text: "Aleph (#1)", link: "/alphabet/01-aleph" },
          { text: "Bet (#2)", link: "/alphabet/02-bet" },
          { text: "Tav (#400)", link: "/alphabet/22-tav" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/njncalub/golden-palace" },
    ],

    footer: {
      message: "Built with VitePress",
      copyright: "",
    },
  },
});
