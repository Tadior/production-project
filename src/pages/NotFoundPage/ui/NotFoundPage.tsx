import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/Page";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export function NotFoundPage(props: PropsWithChildren<NotFoundPageProps>) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("not-found-page")}
    </Page>
  );
}
