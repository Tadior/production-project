import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { Currency } from "../../model/types/currency";
var options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];
export var CurrencySelect = memo(function (props) {
    var className = props.className, value = props.value, onChange = props.onChange, readonly = props.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(Select, { label: t("Enter country"), options: options, value: value, onChange: onChangeHandler, readonly: readonly }, void 0));
});
