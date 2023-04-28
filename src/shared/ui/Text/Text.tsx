import { classNames } from "shared/lib/classNames/classNames";
import { memo, PropsWithChildren } from "react";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  CENTER = "center",
  LEFT = "left",
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: PropsWithChildren<TextProps>) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={classNames(cls.title)}>{title}</p>}
      {text && <p className={classNames(cls.text)}>{text}</p>}
    </div>
  );
});
