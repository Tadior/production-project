import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile-page.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "main-link",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "about-link",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "profile-link",
  },
];
