import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/app/entities/User";
import MainIcon from "@/shared/assets/icons/main.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ProfileIcon from "@/shared/assets/icons/profile-page.svg";
import ArticlesIcon from "@/shared/assets/icons/article.svg";
import { SidebarItemType } from "../types/sidebar";
import { RoutePath } from "@/shared/const/router";

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: "main-link"
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "about-link"
      }
    ];
    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: "profile-link",
          authOnly: true
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: "articles-link",
          authOnly: true
        }
      );
    }
    return sidebarItemsList;
  }
);