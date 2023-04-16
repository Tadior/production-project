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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "app/entities/User";
import cls from "./SidebarItem.module.scss";
export var SidebarItem = memo(function (props) {
    var _a;
    var item = props.item, collapsed = props.collapsed;
    var t = useTranslation("navbar").t;
    var isAuth = useSelector(getUserAuthData);
    if (!isAuth && item.authOnly) {
        return null;
    }
    return (_jsxs(AppLink, __assign({ className: classNames(cls.item, (_a = {}, _a[cls.collapsed] = collapsed, _a)), theme: AppLinkTheme.SECONDARY, to: item.path }, { children: [_jsx(item.Icon, { className: cls.icon }, void 0), _jsx("span", __assign({ className: cls.link }, { children: t(item.text) }), void 0)] }), void 0));
});
