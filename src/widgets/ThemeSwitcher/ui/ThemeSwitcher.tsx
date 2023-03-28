import { useTheme, Theme } from "app/providers/ThemeProvider";
import { memo, PropsWithChildren } from "react";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(
  (props: PropsWithChildren<ThemeSwitcherProps>) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
      <Button className={classNames("", {}, [className])} onClick={toggleTheme}>
        {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </Button>
    );
  }
);
