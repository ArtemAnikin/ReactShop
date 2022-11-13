import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...resp }) => {
	return (
		<button className={styles.button} {...resp}>
			{children}
		</button>
	)
}

export default Button
