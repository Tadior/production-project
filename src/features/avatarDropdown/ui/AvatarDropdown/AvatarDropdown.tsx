import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Dropdown } from "shared/ui/Popups";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "app/entities/User";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation("navbar");
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (

    <Dropdown
      className={classNames("", {}, [className])}
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t("adminka"),
          href: RoutePath.admin_panel
        }] : []),
        {
          content: t("profile-link"),
          href: RoutePath.profile + authData.id
        },
        {
          content: t("sign-out"),
          onClick: onLogout
        }
      ]}
      direction="bottom left"
      trigger={
        <Avatar size={30} src={authData.avatar} />}
    />

  );
});