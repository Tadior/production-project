var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { AboutPage } from "pages/AboutPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["NOTFOUND"] = "not_found";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLE_DETAILS"] = "article_details";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = "/",
    _a[AppRoutes.ABOUT] = "/about",
    _a[AppRoutes.PROFILE] = "/profile",
    _a[AppRoutes.ARTICLES] = "/articles",
    _a[AppRoutes.ARTICLE_DETAILS] = "/articles/",
    _a[AppRoutes.NOTFOUND] = "*",
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}, void 0),
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}, void 0),
    },
    _b[AppRoutes.PROFILE] = {
        path: RoutePath.profile,
        element: _jsx(ProfilePage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLES] = {
        path: RoutePath.articles,
        element: _jsx(ArticlesPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLE_DETAILS] = {
        path: "".concat(RoutePath.article_details, ":id"),
        element: _jsx(ArticleDetailsPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.NOTFOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}, void 0),
    },
    _b);