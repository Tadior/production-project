import { Mods, classNames } from "shared/lib/classNames/classNames";
import { CSSProperties, PropsWithChildren, useMemo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export function Avatar(props: PropsWithChildren<AvatarProps>) {
  const { className, src, size, alt } = props;
  const { t } = useTranslation();
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return (
    <img
      className={classNames(cls.Avatar, mods, [className])}
      src={src}
      style={styles}
      alt={alt}
    />
  );
}
