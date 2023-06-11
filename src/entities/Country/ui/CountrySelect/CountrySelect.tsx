import { memo, PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';

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
  { value: Country.Russia, content: Country.Russia },
];

export const CountrySelect = memo(
  (props: PropsWithChildren<CountrySelectProps>) => {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    const commonProps = {
      onChange: onChangeHandler,
      value,
      defaultValue: t('Enter country'),
      items: options,
      readonly,
      direction: 'top right' as const,
      label: t('Enter country'),
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ListBox {...commonProps} />}
        off={<ListBoxDeprecated {...commonProps} />}
      />
    );
  },
);
