var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useEffect } from "react";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Sceleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleCodeBlockComponent } from "app/entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "app/entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "app/entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./ArticleDetails.module.scss";
import { articleDetailsReducer } from "../../model/slices/articleDetailsSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import { ArticleBlockType } from "../../model/types/article";
var reducers = {
    articleDetails: articleDetailsReducer,
};
export var ArticleDetails = memo(function (props) {
    var className = props.className, id = props.id;
    var dispatch = useAppDispatch();
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var article = useSelector(getArticleDetailsData);
    var error = useSelector(getArticleDetailsError);
    var t = useTranslation("article-details").t;
    var renderBlock = useCallback(function (block) {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return _jsx(ArticleCodeBlockComponent, { className: cls.block, block: block }, block.id);
            case ArticleBlockType.TEXT:
                return _jsx(ArticleTextBlockComponent, { className: cls.block, block: block }, block.id);
            case ArticleBlockType.IMAGE:
                return _jsx(ArticleImageBlockComponent, { className: cls.block, block: block }, block.id);
            default:
                return null;
        }
    }, []);
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, height: 200, border: "50%" }, void 0), _jsx(Skeleton, { className: cls.title, width: 300, height: 32 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: 600, height: 24 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }, void 0)] }, void 0));
    }
    else if (error) {
        content = _jsx(Text, { align: TextAlign.CENTER, title: t("Article error") }, void 0);
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { size: 200, src: article === null || article === void 0 ? void 0 : article.img, className: cls.avatar }, void 0) }), void 0), _jsx(Text, { className: cls.title, title: article === null || article === void 0 ? void 0 : article.title, text: article === null || article === void 0 ? void 0 : article.subtitle, size: TextSize.L }, void 0), _jsxs("div", __assign({ className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icon, Svg: EyeIcon }, void 0), _jsx(Text, { text: String(article === null || article === void 0 ? void 0 : article.views) }, void 0)] }), void 0), _jsxs("div", __assign({ className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icon, Svg: CalendarIcon }, void 0), _jsx(Text, { text: article === null || article === void 0 ? void 0 : article.createdAt }, void 0)] }), void 0), article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock)] }, void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx("div", __assign({ className: classNames(cls.ArticleDetails, {}, [className]) }, { children: content }), void 0) }), void 0));
});
