import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "All",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
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
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "ReactJS",
    path: "/?category=ReactJS",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Laravel",
    path: "/?category=Laravel",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "WordPress",
    path: "/?category=WordPress",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Shopify",
    path: "/?category=Shopify",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Wix",
    path: "/?category=Wix",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "App",
    path: "/?category=App",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
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
    title: "Login",
    path: "/login",
  },
  {
    title: "Register",
    path: "/register",
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
