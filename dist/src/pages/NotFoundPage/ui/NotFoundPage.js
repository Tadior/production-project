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
import { t } from "i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
export function NotFoundPage(props) {
    var className = props.className;
    return (_jsx("div", __assign({ className: classNames(cls.NotFoundPage, {}, [className]) }, { children: t("not-found-page") }), void 0));
}
