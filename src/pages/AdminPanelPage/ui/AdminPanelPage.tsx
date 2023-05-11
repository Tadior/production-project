import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/Page";

function AdminPanelPage() {
  const { t } = useTranslation();

  return (
    <Page className={classNames("", {}, [])}>
      {t("Admin panel")}
    </Page>
  );
}

export default memo(AdminPanelPage);
