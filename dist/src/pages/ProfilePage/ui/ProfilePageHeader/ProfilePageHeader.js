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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData, } from "app/entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./ProfilePageHeader.module.scss";
export function ProfilePageHeader(props) {
    var className = props.className;
    var t = useTranslation().t;
    var readonly = useSelector(getProfileReadonly);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs("div", __assign({ className: cls.ProfilePageHeader }, { children: [_jsx(Text, { title: t("profile") }, void 0), readonly ? (_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, className: cls.editBtn, onClick: onEdit }, { children: t("edit") }), void 0)) : (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE_RED, className: cls.editBtn, onClick: onCancelEdit }, { children: t("discard") }), void 0), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, className: cls.saveBtn, onClick: onSave }, { children: t("save") }), void 0)] }, void 0))] }), void 0));
}
