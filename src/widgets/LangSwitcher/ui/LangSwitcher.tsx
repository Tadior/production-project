import { classNames } from "shared/lib/classNames/classNames";

import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <Button
        className={classNames("", {}, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={toggle}
      >
        {short ? t("short-language") : t("language")}
      </Button>
    </div>
  );
}
