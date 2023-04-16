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
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { CurrencySelect } from "app/entities/Currency";
import { CountrySelect } from "app/entities/Country/ui/CountrySelect/CountrySelect";
import cls from "./ProfileCard.module.scss";
export function ProfileCard(props) {
    var _a;
    var className = props.className, data = props.data, isLoading = props.isLoading, error = props.error, readonly = props.readonly, onChangeFirstName = props.onChangeFirstName, onChangeLastName = props.onChangeLastName, onChangeAge = props.onChangeAge, onChangeCity = props.onChangeCity, onChangeCountry = props.onChangeCountry, onChangeUsername = props.onChangeUsername, onChangeCurrency = props.onChangeCurrency, onChangeAvatar = props.onChangeAvatar;
    var t = useTranslation("profile").t;
    if (isLoading) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.loading]) }, { children: _jsx(Loader, {}, void 0) }), void 0));
    }
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.error]) }, { children: _jsx(Text, { theme: TextTheme.ERROR, title: t("profile-error-title"), text: t("profile-error-text"), align: TextAlign.CENTER }, void 0) }), void 0));
    }
    var mods = (_a = {},
        _a[cls.editing] = !readonly,
        _a);
    return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, mods, [className]) }, { children: _jsxs("div", __assign({ className: cls.data }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar }, void 0) }), void 0)), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.firstName, placeholder: t("input-firstname"), className: cls.input, readOnly: readonly, onChange: onChangeFirstName }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastName, placeholder: t("input-lastname"), className: cls.input, readOnly: readonly, onChange: onChangeLastName }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t("input-age"), className: cls.input, readOnly: readonly, onChange: onChangeAge }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t("input-city"), className: cls.input, readOnly: readonly, onChange: onChangeCity }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t("input-username"), className: cls.input, readOnly: readonly, onChange: onChangeUsername }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t("input-avatar"), className: cls.input, readOnly: readonly, onChange: onChangeAvatar }, void 0), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readonly }, void 0), _jsx(CountrySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, onChange: onChangeCountry, readonly: readonly }, void 0)] }), void 0) }), void 0));
}
