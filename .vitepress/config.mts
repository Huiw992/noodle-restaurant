import {withMermaid} from "vitepress-plugin-mermaid";
import {head, nav, sidebar, social_links} from "./configs";

export default withMermaid({
    base: "/noodle-restaurant/",
    title: "炒拉条の程序猿",
    lang: "zh-CN",
    head: head,
    lastUpdated: true,
    cleanUrls: true,

    // markdown 配置
    markdown: {
        lineNumbers: true,
        image: {
            lazyLoading: true,
        },
    },

    // themeConfig 配置
    themeConfig: {
        logo: "/logo.svg",
        nav: nav,
        sidebar: sidebar,
        socialLinks: social_links,

        // 搜索配置
        search: {
            provider: "local",
        },

        outline: {
            level: "deep",
            label: "目录",
        },

        // 文档页脚
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },

        // 页脚
        footer: {
            message: "基于 MIT 许可发布",
            copyright: "版权所有 © 2025 老王面摊",
        },
    },
});
