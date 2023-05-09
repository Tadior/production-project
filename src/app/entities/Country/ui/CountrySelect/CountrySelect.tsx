import { memo, PropsWithChildren, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ListBox } from "shared/ui/Popups/ui/ListBox/ListBox";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia }
];

export const CountrySelect = memo(
  (props: PropsWithChildren<CountrySelectProps>) => {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <ListBox
        onChange={onChangeHandler}
        value={value}
        defaultValue={t("Enter country")}
        items={options}
        readonly={readonly}
        direction="top right"
        label={t("Enter country")}
      />
    );
  }
);
