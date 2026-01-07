import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const isNetlify = process.env.NETLIFY_CNAME;

export default defineUserConfig({
  base: isNetlify ? '/' : '/',

  lang: "zh-CN",
  title: "bxx-114514 的留档博客",
  description: "bxx-114514 的留档博客",
  shouldPrefetch: false,

  theme,

  head: [
  // ...
    ["script", { src: "/live2d-widget/dist/autoload.js" }],

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
        href: "/css/MiSans.css",
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        crossorigin: "anonymous",
        href: "/css/HYWenHei-85W.css",
      }
    ]
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
