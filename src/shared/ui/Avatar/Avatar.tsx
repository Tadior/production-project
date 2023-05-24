import { CSSProperties, PropsWithChildren, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import ProfileIcon from '../../assets/icons/profile.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Sceleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export function Avatar(props: PropsWithChildren<AvatarProps>) {
  const {
    className,
    src,
    size,
    alt,
    fallbackInverted,
  } = props;
  const { t } = useTranslation();
  const mods: Mods = {};
  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={ProfileIcon} />;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.Avatar, mods, [className])}
      src={src}
      style={styles}
      alt={alt}
    />
  );
}
