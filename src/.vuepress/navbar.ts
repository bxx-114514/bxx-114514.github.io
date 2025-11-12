import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "原导航页",
    link: "/navigation.md",
    icon: "line-md:compass-filled"
  },
  {
    text: "留言区",
    link: "/comments.md",
    icon: "line-md:chat-round-dots-filled"
  },
  {
    text: "i 鸣相关",
    link: "/iming/"
  },
  {
    text: "仙舟联盟",
    link: "/xzlm/"
  },
  {
    text: "《原神》和媒体",
    link: "/genshinimpact-media/"
  },
  {
    text: "AC",
    link: "/ibili-blog/"
  },
  {
    text: "i 鬼",
    link: "/igui/"
  },
  {
    text: "关于我",
    link: "/intro.md",
    icon: "circle-info"
  }
]);
