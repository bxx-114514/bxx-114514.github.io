import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "", "navigation", "comments", "posts/", "intro"
  ],

  "/posts/": [
    {
      text: "文章",
      icon: "book",
      prefix: "",
      link: "",
      collapsible: true,
      children: "structure",
    },
  ],
},

);
