import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RatingCard } from "@/app/entities/Rating";
import { useGetArticleRating, useRateArticle } from "@/features/articleRating/api/articleRatingApi";
import { getUserAuthData } from "@/app/entities/User";
import { Skeleton } from "@/shared/ui/Sceleton/Skeleton";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ""
  });

  const [rateArticleMutation] = useRateArticle();


  const rating = data?.[0];

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? "",
        articleId,
        rate: starsCount,
        feedback
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, rateArticleMutation, userData?.id]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  if (isLoading) {
    return (
      <Skeleton width="100%" height={120} />
    );
  }

  return (

    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t("review article")}
      feedbackTitle={t("review article feedback")}
      hasFeedback
    />

  );
});

export default ArticleRating;