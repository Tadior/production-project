import { classNames } from "shared/lib/classNames/classNames";
import { memo, PropsWithChildren, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails, ArticleList } from "app/entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "app/entities/Comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "features/addCommentForm";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "widgets/Page/Page";
import { getArticleRecommendationsIsLoading } from "pages/ArticleDetailsPage/model/selectors/recommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import {
  fetchArticleRecommendations
} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { getArticleRecommendations } from "../../model/slices/articleDetailsRecommendationsSlice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { getArticleComments } from "../../model/slices/articleDetailsComments";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

function ArticleDetailsPage(props: PropsWithChildren<ArticleDetailsPageProps>) {
  const { className } = props;
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
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
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Article is not found")}
      </Page>
    );
  }
  console.log(recommendations);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t("back to list")}
        </Button>
        <ArticleDetails id={id} />
        <Text size={TextSize.L} className={cls.commentTitle} title={t("Recommendations")} />
        <ArticleList target="_blank" className={cls.recommendations} articles={recommendations}
          isLoading={recommendationsIsLoading} />
        <Text size={TextSize.L} className={cls.commentTitle} title={t("Comments")} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
