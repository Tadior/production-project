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
import cls from "./ArticlesPage.module.scss";
function ArticlesPage(props) {
    var className = props.className;
    var t = useTranslation().t;
    return (_jsx("div", __assign({ className: classNames(cls.ArticlesPage, {}, [className]) }, { children: t("ArticlesPage") }), void 0));
}
export default memo(ArticlesPage);
