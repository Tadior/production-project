import { classNames } from "shared/lib/classNames/classNames";
import { memo, PropsWithChildren, useCallback } from "react";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "widgets/Page/Page";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { initArticlesPage } from "pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage";
import { useSearchParams } from "react-router-dom";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { ArticleInfiniteList } from "../../ui/ArticleInfiniteList/ArticleInfiniteList";
import { ArticlePageFilters } from "../../ui/ArticlesPageFilters/ArticlePageFilters";
import { articlesPageReducer } from "../../model/slices/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

function ArticlesPage(props: PropsWithChildren<ArticlesPageProps>) {
  const { className } = props;
  const dispatch = useAppDispatch();
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);
  const [searchParams] = useSearchParams();
  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlePageFilters />
        <ArticleInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlesPage);
