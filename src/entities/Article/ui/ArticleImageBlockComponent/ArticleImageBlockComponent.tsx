import type { PropsWithChildren } from 'react';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((
  props: PropsWithChildren<ArticleImageBlockComponentProps>,
) => {
  const { className, block } = props;

  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    >
      <img src={block.src} className={cls.img} alt={block.title} />
      {block.title && (
        <Text title={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
