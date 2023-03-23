import { Counter } from "app/entities/Counter";
import { BugButton } from "app/providers/ErrorBoundary";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <div>
      <BugButton />
      <Counter />
    </div>
  );
};

export default MainPage;
