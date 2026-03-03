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
          { text: "01 - א - Aleph (#1)", link: "/alphabet/01-aleph" },
          { text: "02 - ב - Bet (#2)", link: "/alphabet/02-bet" },
          { text: "03 - ג - Gimel (#3)", link: "/alphabet/03-gimel" },
          { text: "04 - ד - Dalet (#4)", link: "/alphabet/04-dalet" },
          { text: "05 - ה - Hey (#5)", link: "/alphabet/05-hey" },
          { text: "06 - ו - Vav (#6)", link: "/alphabet/06-vav" },
          { text: "07 - ז - Zayin (#7)", link: "/alphabet/07-zayin" },
          { text: "08 - ח - Chet (#8)", link: "/alphabet/08-chet" },
          { text: "09 - ט - Tet (#9)", link: "/alphabet/09-tet" },
          { text: "10 - י - Yod (#10)", link: "/alphabet/10-yod" },
          { text: "11 - כ - Kaf (#20)", link: "/alphabet/11-kaf" },
          { text: "12 - ל - Lamed (#30)", link: "/alphabet/12-lamed" },
          { text: "13 - מ - Mem (#40)", link: "/alphabet/13-mem" },
          { text: "14 - נ - Nun (#50)", link: "/alphabet/14-nun" },
          { text: "15 - ס - Samech (#60)", link: "/alphabet/15-samech" },
          { text: "16 - ע - Ayin (#70)", link: "/alphabet/16-ayin" },
          { text: "17 - פ - Pey (#80)", link: "/alphabet/17-pey" },
          { text: "18 - צ - Tzadi (#90)", link: "/alphabet/18-tzadi" },
          { text: "19 - ק - Kof (#100)", link: "/alphabet/19-kof" },
          { text: "20 - ר - Resh (#200)", link: "/alphabet/20-resh" },
          { text: "21 - ש - Shin (#300)", link: "/alphabet/21-shin" },
          { text: "22 - ת - Tav (#400)", link: "/alphabet/22-tav" },
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
