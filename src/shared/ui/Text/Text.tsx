import { classNames } from "shared/lib/classNames/classNames";
import type { PropsWithChildren } from "react";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export function Text(props: PropsWithChildren<TextProps>) {
  const { className, title, text, theme } = props;

  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      {title && <p className={classNames(cls.title)}>{title}</p>}
      {text && <p className={classNames(cls.text)}>{text}</p>}
    </div>
  );
}
