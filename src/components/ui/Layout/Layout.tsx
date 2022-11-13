import { FC, PropsWithChildren } from 'react'
import Navbar from '../navbar/Navbar'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className={styles.content}>{children}</div>
		</>
	)
}

export default Layout
