import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "",
    path: "/search",
    icon: <Icon icon="lucide:search" width="24" height="24" />,
  },
  {
    title: "All",
    path: "/",
    /*icon: <Icon icon="lucide:home" width="24" height="24" />,*/
  },
  /*{
    title: "Projects",
    path: "/projects",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/projects" },
      { title: "Web Design", path: "/projects/web-design" },
      { title: "Graphic Design", path: "/projects/graphic-design" },
    ],
  },*/
  {
    title: "NextJS",
    path: "/?category=NextJs",
  },
  {
    title: "ReactJS",
    path: "/?category=ReactJS",
  },
  {
    title: "Laravel",
    path: "/?category=Laravel",
  },
  {
    title: "WordPress",
    path: "/?category=WordPress",
  },
  {
    title: "Shopify",
    path: "/?category=Shopify",
  },
  {
    title: "Wix",
    path: "/?category=Wix",
  },
  {
    title: "App",
    path: "/?category=App",
  },

  /*{
    title: "Settings",
    path: "/settings",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/privacy" },
    ],
  },*/

  {
    title: "Contact Us",
    path: "/contact",
  },
];
