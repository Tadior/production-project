import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/CounterSlice";

interface CounterProps {
  className?: string;
}

export function Counter(props: PropsWithChildren<CounterProps>) {
  const { className } = props;
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-button" onClick={increment}>
        {t("increment")}
      </Button>
      <Button data-testid="decrement-button" onClick={decrement}>
        {t("decrement")}
      </Button>
    </div>
  );
}
