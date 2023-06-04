import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Comment } from '../..';
import { CommentCard } from '../CommentCard/CommentCard';

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
      <VStack gap="16" className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((commentItem) => (
          <CommentCard
            isLoading={isLoading}
            comment={commentItem}
            key={commentItem.id}
          />
        ))
      ) : (
        <Text text={t('Comments are empty')} />
      )}
    </VStack>
  );
});
