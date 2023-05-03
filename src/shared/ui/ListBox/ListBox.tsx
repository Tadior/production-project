import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { HStack } from "shared/ui/Stack";
import { Button } from "../Button/Button";
import cls from "./ListBox.module.scss";

export interface ListboxItem {
  value: string,
  content: ReactNode,
  disabled?: boolean
}

type DropdownDiretion = "top" | "bottom";

interface ListboxProps {
  items?: ListboxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction: DropdownDiretion;
  label?: string;
}

export function ListBox(props: ListboxProps) {
  const {
    items,
    className,
    defaultValue,
    value,
    onChange,
    readonly,
    direction = "bottom",
    label
  } = props;

  const optionsClasses = [cls[direction]];

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button aria-disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled }, [])}>
                  {selected && "!!!"}
                  {item.content}
                </li>

              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}