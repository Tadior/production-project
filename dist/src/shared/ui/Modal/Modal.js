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
import { useCallback, useEffect, useRef, useState, } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
var ANIMATION_DELAY = 300;
export function Modal(props) {
    var _a;
    var className = props.className, children = props.children, isOpen = props.isOpen, onClose = props.onClose, lazy = props.lazy;
    var theme = useTheme().theme;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var _c = useState(false), isMounted = _c[0], setIsMounted = _c[1];
    var timerRef = useRef();
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    var closeHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                setIsClosing(false);
                onClose();
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    var onContentClick = function (event) {
        event.stopPropagation();
    };
    var onKeyDown = useCallback(function (event) {
        if (event.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler]);
    useEffect(function () {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    var mods = (_a = {},
        _a[cls.opened] = isOpen,
        _a[cls.isClosing] = isClosing,
        _a);
    if (lazy && !isMounted) {
        return null;
    }
    return (_jsx(Portal, { children: _jsx("div", __assign({ className: classNames(cls.Modal, mods, [className]) }, { children: _jsx("div", __assign({ className: cls.overlay, onClick: closeHandler }, { children: _jsx("div", __assign({ className: cls.content, onClick: onContentClick }, { children: children }), void 0) }), void 0) }), void 0) }, void 0));
}
