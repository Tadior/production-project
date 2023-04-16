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
import { memo, useState } from "react";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import cls from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";
export var Sidebar = memo(function (props) {
    var _a;
    var _b = useState(false), collapsed = _b[0], setCollapsed = _b[1];
    var className = props.className;
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_a = {}, _a[cls.collapsed] = collapsed, _a), [
            className,
        ]) }, { children: [_jsx(Button, __assign({ "data-testid": "sidebar-toggle", type: "button", onClick: onToggle, className: cls.collapseBtn, theme: ButtonTheme.BACKGROUND_INVERTED, square: true, size: ButtonSize.L }, { children: collapsed ? ">" : "<" }), void 0), _jsx("div", __assign({ className: cls.items }, { children: SidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path)); }) }), void 0), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}, void 0), _jsx(LangSwitcher, { short: collapsed, className: cls.lang }, void 0)] }), void 0)] }), void 0));
});
