import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

import { PropsWithChildren, useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface SidebarProps {
	className?: string
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
	const [collapsed, setCollapsed] = useState(false)
	const { className } = props

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button onClick={onToggle}>Toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
