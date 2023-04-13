import { classNames } from "shared/lib/classNames/classNames";
import type { PropsWithChildren } from "react";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export function ArticleCodeBlockComponent(
  props: PropsWithChildren<ArticleCodeBlockComponentProps>
) {
  const { className } = props;

  return (
    <div
      className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      // eslint-disable-next-line i18next/no-literal-string
    >
      ArticleCodeBlockComponent
    </div>
  );
}
