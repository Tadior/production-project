import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile-page.svg";
import ArticlesIcon from "shared/assets/icons/article.svg";
export var SidebarItemsList = [
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
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: "articles-link",
        authOnly: true,
    },
];