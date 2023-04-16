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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "app/entities/Article";
import { useParams } from "react-router-dom";
import cls from "./ArticleDetailsPage.module.scss";
function ArticleDetailsPage(props) {
    var className = props.className;
    var t = useTranslation("article-details").t;
    var id = useParams().id;
    if (!id) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: t("Article is not found") }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: _jsx(ArticleDetails, { id: id }, void 0) }), void 0));
}
export default memo(ArticleDetailsPage);
