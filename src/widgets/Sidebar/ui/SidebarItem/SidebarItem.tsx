import { memo, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(
  (props: PropsWithChildren<SidebarItemProps>) => {
    const { item, collapsed } = props;
    const { t } = useTranslation('navbar');
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.authOnly) {
      return null;
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <AppLink
            className={classNames(cls.itemRedesigned, {
              [cls.collapsedRedesigned]: collapsed,
            })}
            activeClassName={cls.active}
            to={item.path}
          >
            <Icon Svg={item.Icon} />
            <span className={cls.link}>{t(item.text)}</span>
          </AppLink>
        }
        off={
          <AppLinkDeprecated
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
          >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
          </AppLinkDeprecated>
        }
      />
    );
  },
);
