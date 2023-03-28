import { classNames } from "shared/lib/classNames/classNames";
import { memo, PropsWithChildren } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(
  (props: PropsWithChildren<SidebarItemProps>) => {
    const { item, collapsed } = props;
    const { t } = useTranslation("navbar");

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
