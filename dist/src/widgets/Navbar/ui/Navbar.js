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
import { getUserAuthData, userActions } from "app/entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation("navbar").t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (authData) {
        return (_jsx("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: _jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onLogout }, { children: t("sign-out") }), void 0) }), void 0));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onShowModal }, { children: t("sign-in") }), void 0), isAuthModal && (_jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }, void 0))] }), void 0));
});
