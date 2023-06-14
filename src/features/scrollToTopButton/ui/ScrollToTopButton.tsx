import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import IconSVG from '@/shared/assets/icons/redesigned/move-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      Svg={IconSVG}
      width={32}
      height={32}
      clickable
      onClick={onClick}
      className={classNames(cls.ScrollToTopButton, {}, [className])}
    />
  );
});
