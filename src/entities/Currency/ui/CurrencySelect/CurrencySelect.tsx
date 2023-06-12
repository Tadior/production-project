import { memo, PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
  (props: PropsWithChildren<CurrencySelectProps>) => {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    const commonProps = {
      className,
      value,
      defaultValue: t('Choose currency'),
      items: options,
      onChange: onChangeHandler,
      readonly,
      direction: 'top right' as const,
      label: t('Choose currency'),
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
