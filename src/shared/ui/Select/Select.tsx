import { Mods, classNames } from "shared/lib/classNames/classNames";
import { ChangeEvent, PropsWithChildren, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: PropsWithChildren<SelectProps>) => {
  const { className, label, options, value, onChange, readonly } = props;
  const mods: Mods = {};

  const optionsList = useMemo(
    () =>
      options?.map((option) => (
        <option className={cls.option} value={option.value} key={option.value}>
          {option.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
