import { memo, PropsWithChildren, useCallback } from 'react';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import ThemeIconDeprecated from '../../../shared/assets/icons/theme-light.svg';
import ThemeIcon from '../../../shared/assets/icons/redesigned/theme-switcher.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(
  (props: PropsWithChildren<ThemeSwitcherProps>) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
      toggleTheme((newTheme) => {
        dispatch(saveJsonSettings({ theme: newTheme }));
      });
    }, [toggleTheme, dispatch]);

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
        off={
          <ButtonDeprecated
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
          >
            <IconDeprecated
              Svg={ThemeIconDeprecated}
              width={40}
              height={40}
              inverted
            />
          </ButtonDeprecated>
        }
      />
    );
  },
);
