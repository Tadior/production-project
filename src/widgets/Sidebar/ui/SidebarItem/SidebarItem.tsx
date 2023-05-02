import { classNames } from "shared/lib/classNames/classNames";
import { memo, PropsWithChildren } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "app/entities/User";
import { SidebarItemType } from "../../model/types/sidebar";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(
  (props: PropsWithChildren<SidebarItemProps>) => {
    const { item, collapsed } = props;
    const { t } = useTranslation("navbar");
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.authOnly) {
      return null;
    }

    return (
      <AppLink
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    );
  }
);
