import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "bxx-114514",
  description: "bxx-114514 的留档博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
