import { classNames } from "shared/lib/classNames/classNames";
import type { PropsWithChildren } from "react";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
}

export function ArticleImageBlockComponent(
  props: PropsWithChildren<ArticleImageBlockComponentProps>
) {
  const { className } = props;

  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      // eslint-disable-next-line i18next/no-literal-string
    >
      ArticleImageBlockComponent
    </div>
  );
}
