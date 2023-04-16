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
import { useTheme, Theme } from "app/providers/ThemeProvider";
import { memo } from "react";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
export var ThemeSwitcher = memo(function (props) {
    var className = props.className;
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsx(Button, __assign({ className: classNames("", {}, [className]), onClick: toggleTheme }, { children: theme === Theme.LIGHT ? _jsx(LightIcon, {}, void 0) : _jsx(DarkIcon, {}, void 0) }), void 0));
});
