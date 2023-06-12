import { memo } from 'react';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Sceleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/ArticleViewConst';
import cls from './ArticleListItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features/lib/toggleFeatures';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.ArticleListItemRedesigned,
      off: () => cls.ArticleListItem,
    });

    if (view === ArticleView.BIG) {
      return (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
              <Card className={cls.card}>
                <div className={cls.header}>
                  <Skeleton border="50%" height={30} width={30} />
                  <Skeleton width={150} height={16} className={cls.username} />
                  <Skeleton width={150} height={16} className={cls.date} />
                </div>
                <Skeleton width={250} height={24} className={cls.title} />
                <Skeleton height={200} className={cls.img} />
                <div className={cls.footer}>
                  <Skeleton height={36} width={200} />
                </div>
              </Card>
            </div>
          }
          off={
            <div
              className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
              ])}
            >
              <CardDeprecated className={cls.card}>
                <div className={cls.header}>
                  <SkeletonDeprecated border="50%" height={30} width={30} />
                  <SkeletonDeprecated
                    width={150}
                    height={16}
                    className={cls.username}
                  />
                  <SkeletonDeprecated
                    width={150}
                    height={16}
                    className={cls.date}
                  />
                </div>
                <SkeletonDeprecated
                  width={250}
                  height={24}
                  className={cls.title}
                />
                <SkeletonDeprecated height={200} className={cls.img} />
                <div className={cls.footer}>
                  <SkeletonDeprecated height={36} width={200} />
                </div>
              </CardDeprecated>
            </div>
          }
        />
      );
    }
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div className={classNames(mainClass, {}, [className, cls[view]])}>
            <Card className={cls.card}>
              <div className={cls.imageWrapper}>
                <Skeleton width={200} height={200} className={cls.img} />
              </div>
              <div className={cls.infoWrapper} />
              <Skeleton width={130} height={16} />
              <div />
              <Skeleton width={150} height={16} className={cls.title} />
            </Card>
          </div>
        }
        off={
          <div
            className={classNames(cls.ArticleListItem, {}, [
              className,
              cls[view],
            ])}
          >
            <CardDeprecated className={cls.card}>
              <div className={cls.imageWrapper}>
                <SkeletonDeprecated
                  width={200}
                  height={200}
                  className={cls.img}
                />
              </div>
              <div className={cls.infoWrapper} />
              <SkeletonDeprecated width={130} height={16} />
              <div />
              <SkeletonDeprecated
                width={150}
                height={16}
                className={cls.title}
              />
            </CardDeprecated>
          </div>
        }
      />
    );
  },
);
