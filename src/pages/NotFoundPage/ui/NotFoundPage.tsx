import { t } from "i18next";
import type { PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "shared/ui/Page/Page";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export function NotFoundPage(props: PropsWithChildren<NotFoundPageProps>) {
  const { className } = props;

  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("not-found-page")}
    </Page>
  );
}
