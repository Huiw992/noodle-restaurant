import { DefaultTheme } from "vitepress";

const docs = "/docs";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "基础",
    base: docs + "/foundation",
    collapsed: true,
    items: [
      { text: "UML", link: "/uml" },
      { text: "markdown", link: "/markdown" },
    ],
  },
  {
    text: "几何",
    base: docs + "/geometry",
    collapsed: true,
    items: [{ text: "几何", link: "/" }],
  },
  {
    text: "渲染",
    base: docs + "/render",
    collapsed: true,
    items: [
      { text: "基础", link: "/basics" },
      { text: "Skia", link: "/skia_build" },
    ],
  },
  {
    text: "工具",
    base: docs + "/tools",
    collapsed: true,
    items: [
      { text: "cocoapods", link: "/cocoapods" },
      { text: "git", link: "/git" },
      { text: "镜像源", link: "/mirrors" },
      { text: "QA", link: "/qa" },
      { text: "系统管理", link: "/system_manage" },
    ],
  },
];
