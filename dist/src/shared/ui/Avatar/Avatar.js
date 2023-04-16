import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Avatar.module.scss";
export function Avatar(props) {
    var className = props.className, src = props.src, size = props.size, alt = props.alt;
    var t = useTranslation().t;
    var mods = {};
    var styles = useMemo(function () { return ({
        width: size || 100,
        height: size || 100,
    }); }, [size]);
    return (_jsx("img", { className: classNames(cls.Avatar, mods, [className]), src: src, style: styles, alt: alt }, void 0));
}
