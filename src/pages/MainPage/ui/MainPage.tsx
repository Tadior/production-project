import { Counter } from "app/entities/Counter";
import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      {t("mainPage")}
      <Counter />
    </div>
  );
};

export default MainPage;
