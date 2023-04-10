import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren, memo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

function ArticleDetailsPage(props: PropsWithChildren<ArticleDetailsPageProps>) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {t("ArticleDetailsPage")}
    </div>
  );
}

export default memo(ArticleDetailsPage);
