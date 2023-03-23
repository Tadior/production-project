import { classNames } from "shared/lib/classNames/classNames";

import type { PropsWithChildren } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export function LoginForm(props: PropsWithChildren<LoginFormProps>) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t("input login")}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("input password")}
      />
      <Button className={cls.loginBtn}>{t("login")}</Button>
    </div>
  );
}
