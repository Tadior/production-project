import { classNames } from "shared/lib/classNames/classNames";
import type { PropsWithChildren } from "react";
import cls from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
}

export function ArticleTextBlockComponent(
  props: PropsWithChildren<ArticleTextBlockComponentProps>
) {
  const { className } = props;

  return (
    <div
      className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      // eslint-disable-next-line i18next/no-literal-string
    >
      ArticleTextBlockComponent
    </div>
  );
}
