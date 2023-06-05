import { memo, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(
  (props: PropsWithChildren<LangSwitcherProps>) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();

    const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button onClick={toggle} variant="clear">
            {t(short ? 'Short lang' : 'lang')}
          </Button>
        }
        off={
          <div>
            <ButtonDeprecated
              className={classNames('', {}, [className])}
              theme={ButtonTheme.CLEAR}
              onClick={toggle}
            >
              {short ? t('short-language') : t('language')}
            </ButtonDeprecated>
          </div>
        }
      />
    );
  },
);
