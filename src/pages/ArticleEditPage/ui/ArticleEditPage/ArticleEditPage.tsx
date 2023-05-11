import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page/Page";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const isEdit = Boolean(id);

  return (

    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit
        ? t("edit page by ID =") + id
        : t("Create new article")
      }
    </Page>

  );
});

export default ArticleEditPage;