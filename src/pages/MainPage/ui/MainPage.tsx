import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };
  return <Page data-testid="MainPage">{t("main-page")}</Page>;
};

export default MainPage;
