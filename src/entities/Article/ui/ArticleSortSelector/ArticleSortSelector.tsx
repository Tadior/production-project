import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select, SelectOption } from "@/shared/ui/Select";
import { SortOrder } from "@/shared/types";
import { ArticleSortField } from "../../model/consts/ArticleSortFieldConst";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: "asc",
      content: t("highest")
    },
    {
      value: "desc",
      content: t("lowest")
    }
  ], [t]);
  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t("creation date")
    },
    {
      value: ArticleSortField.TITLE,
      content: t("title")
    },
    {
      value: ArticleSortField.VIEWS,
      content: t("views")
    }
  ], [t]);

  return (

    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t("sort by")}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t("by")}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>

  );
});