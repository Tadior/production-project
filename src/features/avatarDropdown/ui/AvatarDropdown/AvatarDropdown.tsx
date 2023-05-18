import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { RoutePath } from "@/shared/const/router";

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