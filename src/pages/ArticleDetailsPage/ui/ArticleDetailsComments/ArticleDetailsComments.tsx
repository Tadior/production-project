import { classNames } from "shared/lib/classNames/classNames";
import { memo, Suspense, useCallback } from "react";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { VStack } from "shared/ui/Stack";
import AddCommentForm from "features/addCommentForm/ui/AddCommentForm/AddCommentForm";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { CommentList } from "app/entities/Comment";
import { Loader } from "shared/ui/Loader/Loader";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { getArticleComments } from "../../model/slices/articleDetailsComments";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation("article-details");
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (

    <VStack gap="16" max className={classNames("", {}, [className])}>
      <Text size={TextSize.L} title={t("Comments")} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>

      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </VStack>

  );
});