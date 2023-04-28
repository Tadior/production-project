import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { ArticleListItemSkeleton } from "app/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Article, ArticleView } from "../../model/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.SMALL,
    isLoading,
    articles,
    target
  } = props;
  const { t } = useTranslation();

  const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

  const renderArticle = (article: Article) => (
    <ArticleListItem target={target} article={article} view={view} className={cls.card} key={article.id} />
  );

  if (!isLoading && !articles.length) {
    return (

      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t("articles is not found")} />
      </div>

    );
  }

  return (

    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons((view))}
    </div>

  );
});