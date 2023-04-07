import { useState } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };
  return <div>{t("main-page")}</div>;
};

export default MainPage;
