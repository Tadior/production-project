import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren, memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "app/entities/Article";
import { useParams } from "react-router-dom";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

function ArticleDetailsPage(props: PropsWithChildren<ArticleDetailsPageProps>) {
  const { className } = props;
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Article is not found")}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
}

export default memo(ArticleDetailsPage);
