/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-04-02 18:22:05
 * @LastEditTime: 2023-05-22 15:12:18
 * @LastEditors: 安知鱼
 */
import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  title: "安知鱼主题指南",
  description: "anzhiyu,hexo主题,anzhiyu主题,安知鱼,博客,魔改,简单的hexo主题,简洁的hexo主题,hexo",
  lang: "zh-CN",
  base: "/anzhiyu-docs/", // 配置更目录。/docs/
  head: [["link", { rel: "icon", href: "/docs/images/c192.png" }]],
  theme: defaultTheme({
    sidebarDepth: 1,
    logo: "./images/c192.png",
    contributorsText: "贡献者",
    lastUpdatedText: "上次更新",
    navbar: [
      { text: "指南", link: "/" },
      { text: "Github", link: "https://github.com/anzhiyu-c/anzhiyu-docs/" },
      { text: "作者博客", link: "https://anzhiy.cn/" },
    ],
    sidebar: [
      {
        text: "简介",
        link: "/",
      },
      {
        text: "快速上手",
        link: "/quick-start.html",
      },
      {
        text: "页面配置",
        link: "/page-configuration.html",
      },
      {
        text: "站点配置(一)",
        link: "/site-configuration1.html",
      },
      {
        text: "站点配置(二)",
        link: "/site-configuration2.html",
      },
      {
        text: "站点配置(三)",
        link: "/site-configuration3.html",
      },
      {
        text: "站点配置(四)",
        link: "/site-configuration4.html",
      },
      {
        text: "赞赏名单",
        link: "/reward-list.html",
      },
    ],
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
    copyCodePlugin({
      // your options
    }),
    mdEnhancePlugin({
      align: true,
      attrs: true,
      card: true,
      tabs: true,
      container: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
    }),
  ],
});
