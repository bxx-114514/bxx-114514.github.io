import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "bxx-114514 的留档博客",
  description: "bxx-114514 的留档博客",

  theme,

  head: [
  // ...

  // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100..900&family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+KR:wght@100..900&family=Noto+Sans+SC:wght@100..900&family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+HK:wght@200..900&family=Noto+Serif+JP:wght@200..900&family=Noto+Serif+KR:wght@200..900&family=Noto+Serif+SC:wght@200..900&family=Noto+Serif+TC:wght@200..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        crossorigin: "anonymous",
        href: "https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Medium.min.css",
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        crossorigin: "anonymous",
        href: "https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Bold.min.css",
      }
    ],
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
