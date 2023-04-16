import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./Icon.module.scss";
export var Icon = memo(function (props) {
    var className = props.className, Svg = props.Svg;
    return (_jsx(Svg, { className: classNames(cls.Icon, {}, [className]) }, void 0));
});
