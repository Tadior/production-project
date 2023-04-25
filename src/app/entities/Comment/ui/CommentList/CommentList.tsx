import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Comment } from "app/entities/Comment";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

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
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (

    <div className={classNames(cls.CommentList, {}, [className])}>
      {
        comments?.length
          ? comments.map(commentItem =>
            <CommentCard
              isLoading={isLoading}
              className={cls.comment}
              comment={commentItem}
              key={commentItem.id} />)
          : <Text text={t("Comments are empty")} />
      }
    </div>

  );
});