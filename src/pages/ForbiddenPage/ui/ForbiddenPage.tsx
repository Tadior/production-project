import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

function ForbiddenPage() {
  const { t } = useTranslation();

  return (
    <Page className={classNames("", {}, [])}>
      {t("Forbidden page")}
    </Page>
  );
}

export default memo(ForbiddenPage);
