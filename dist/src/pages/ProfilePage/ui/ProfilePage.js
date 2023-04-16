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
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, ValidateProfileError, } from "app/entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { TextTheme, Text } from "shared/ui/Text/Text";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
var reducers = {
    profile: profileReducer,
};
function ProfilePage(props) {
    var _a;
    var className = props.className;
    var t = useTranslation("profile").t;
    var dispatch = useAppDispatch();
    var formData = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var isLoading = useSelector(getProfileIsLoading);
    var readonly = useSelector(getProfileReadonly);
    var validateErrors = useSelector(getProfileValidateErrors);
    var validateErrorsTranslates = (_a = {},
        _a[ValidateProfileError.SERVER_ERROR] = t("server-error"),
        _a[ValidateProfileError.INCORRECT_AGE] = t("incorrect-age"),
        _a[ValidateProfileError.INCORRECT_COUNTRY] = t("incorrect-country"),
        _a[ValidateProfileError.INCORRECT_USER_DATA] = t("incorrect-userData"),
        _a[ValidateProfileError.INCORRECT_CITY] = t("incorrect-city"),
        _a[ValidateProfileError.NO_DATA] = t("no-data"),
        _a);
    useEffect(function () {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);
    var onChangeFirstName = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ firstName: value }));
    }, [dispatch]);
    var onChangeLastName = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastName: value }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        var clearedValue = value === null || value === void 0 ? void 0 : value.replace(/\D/g, "");
        dispatch(profileActions.updateProfile({ age: Number(clearedValue) }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateProfile({ country: country }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateProfile({ currency: currency }));
    }, [dispatch]);
    var onChangeUsername = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames("", {}, [className]) }, { children: [_jsx(ProfilePageHeader, {}, void 0), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) &&
                    (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.map(function (error) { return (_jsx(Text, { theme: TextTheme.ERROR, text: validateErrorsTranslates[error] }, error)); })), _jsx(ProfileCard, { data: formData, isLoading: isLoading, error: error, readonly: readonly, onChangeFirstName: onChangeFirstName, onChangeLastName: onChangeLastName, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeCountry: onChangeCountry, onChangeCurrency: onChangeCurrency, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar }, void 0)] }), void 0) }), void 0));
}
export default ProfilePage;
