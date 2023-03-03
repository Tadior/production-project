import { Theme, useTheme } from 'app/providers/ThemeProvider'
import type { PropsWithChildren } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export function ThemeSwitcher(props: PropsWithChildren<ThemeSwitcherProps>) {
	const { className } = props
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	)
}
