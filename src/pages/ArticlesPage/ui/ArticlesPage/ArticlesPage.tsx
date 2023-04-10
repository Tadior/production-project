import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren, memo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

function ArticlesPage(props: PropsWithChildren<ArticlesPageProps>) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t("ArticlesPage")}
    </div>
  );
}

export default memo(ArticlesPage);
