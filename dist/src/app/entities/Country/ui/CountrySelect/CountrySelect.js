import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { Country } from "../../model/types/country";
var options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
];
export var CountrySelect = memo(function (props) {
    var className = props.className, value = props.value, onChange = props.onChange, readonly = props.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(Select, { label: t("Enter country"), options: options, value: value, onChange: onChangeHandler, readonly: readonly }, void 0));
});
