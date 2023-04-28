import { getUserAuthData, userActions } from "app/entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./Navbar.module.scss";

interface navbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: navbarProps) => {
  const { t } = useTranslation("navbar");
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Text className={cls.appName} title={t("App")} theme={TextTheme.INVERTED} />
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
          {t("Create article")}
        </AppLink>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t("sign-out")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("sign-in")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
});
