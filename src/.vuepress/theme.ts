import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "천화(天華)SRSH",
    url: "https://bxx-114514.github.io",
  },

  logo: "/logo.png",

  repo: "bxx-114514/bxx-114514.github.io",

  docsDir: "src",
  docsRepo: "bxx-114514/bxx-114514.github.io",
  docsBranch: "main",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "Powered by VuePress-Theme-Hope",
  displayFooter: true,

  // 博客相关
  blog: {
    avatar: "/Citlali.jpg",
    name: "천화(天華)SRSH",
    description: "一个正义的史官",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/626140137",
      Email: "mailto:tzhong072@gmail.com",
      QQ: "https://qm.qq.com/q/1uKRrF0dba",
      GitHub: "https://github.com/bxx-114514",
      Gmail: "mailto:tzhong072@gmail.com",
      Instagram: "https://www.instagram.com/114514buxianxian/",
      Twitter: "https://x.com/bxx_114514",
      Weibo: "https://weibo.com/u/7847016698",
      XiaoHongShu: "https://www.xiaohongshu.com/user/profile/67f387fa000000000d009f9d",
      Youtube: "https://www.youtube.com/@bxx-ii4514",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    alert: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    search: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
      provider: "Waline",
      serverURL: "https://bxx-waline.netlify.app/.netlify/functions/comment",
      dark: "auto",
      reaction: true,
    },

    // comment: {
      // 选择一个评论服务
      // provider: "Giscus",
      // 服务选项
      // repo: "bxx-114514/bxx-114514.github.io",
      // repoId: "R_kgDOP7K8Qg",
      // category: "Announcements",
      // categoryId: "DIC_kwDOP7K8Qs4CwLTE"
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
