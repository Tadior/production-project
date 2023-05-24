import { memo, PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

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
    const {
      className, value, onChange, readonly,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <ListBox
        className={className}
        value={value}
        defaultValue={t('Choose currency')}
        items={options}
        onChange={onChangeHandler}
        readonly={readonly}
        direction="top right"
        label={t('Choose currency')}
      />
    );
  },
);
