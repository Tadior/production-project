import { classNames } from "shared/lib/classNames/classNames";
import { memo, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { ArticleList, ArticleView } from "app/entities/Article";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

function ArticlesPage(props: PropsWithChildren<ArticlesPageProps>) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList isLoading view={ArticleView.BIG} articles={[]} />
    </div>
  );
}

export default memo(ArticlesPage);
