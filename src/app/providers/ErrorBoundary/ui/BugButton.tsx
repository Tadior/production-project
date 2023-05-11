import { PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";

// Компонент дя тестирования
export function BugButton() {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow} className="bug-button">
      {t("throw error")}
    </Button>
  );
}
