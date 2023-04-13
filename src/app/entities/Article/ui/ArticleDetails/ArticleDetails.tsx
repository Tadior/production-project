import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren, memo, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Sceleton/Skeleton";
import cls from "./ArticleDetails.module.scss";
import { articleDetailsReducer } from "../../model/slices/articleDetailsSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(
  (props: PropsWithChildren<ArticleDetailsProps>) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const { t } = useTranslation("article-details");

    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = (
        <div>
          <Skeleton
            className={cls.avatar}
            width={200}
            height={200}
            border="50%"
          />
          <Skeleton className={cls.title} width={300} height={32} />
          <Skeleton className={cls.skeleton} width={600} height={24} />
          <Skeleton className={cls.skeleton} width="100%" height={200} />
          <Skeleton className={cls.skeleton} width="100%" height={200} />
        </div>
      );
    } else if (error) {
      content = <Text align={TextAlign.CENTER} title={t("Article error")} />;
    } else {
      content = <div>ArticleDetails</div>;
    }

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  }
);
