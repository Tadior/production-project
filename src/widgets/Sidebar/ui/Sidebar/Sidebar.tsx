import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren, useState } from "react";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        Toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
