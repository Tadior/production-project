import { classNames } from "shared/lib/classNames/classNames";
import { memo, PropsWithChildren, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "app/entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "app/entities/Comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "features/addCommentForm";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetailsComments";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

function ArticleDetailsPage(props: PropsWithChildren<ArticleDetailsPageProps>) {
  const { className } = props;
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Article is not found")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t("back to list")}
        </Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t("Comments")} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
