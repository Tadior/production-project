import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface navbarProps {
  className?: string;
}

export const Navbar = ({ className }: navbarProps) => {
  const { t } = useTranslation("navbar");

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>/</div>
    </div>
  );
};
