import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Comment } from "app/entities/Comment";
import { VStack } from "shared/ui/Stack";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" className={classNames("", {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (

    <VStack gap="16" className={classNames("", {}, [className])}>
      {
        comments?.length
          ? comments.map(commentItem =>
            <CommentCard
              isLoading={isLoading}
              comment={commentItem}
              key={commentItem.id} />)
          : <Text text={t("Comments are empty")} />
      }
    </VStack>

  );
});