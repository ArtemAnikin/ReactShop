import { FC } from 'react'
import AddNavBarItems from '@ui/navbar/components/AddNavBarItems'
import items from './NavBarItems.json'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
	return (
		<div className={styles.navWrapper}>
			<nav>
				<ul className={styles.menuItems}>
					<AddNavBarItems items={items} side={'leftSide'} />
					<AddNavBarItems items={items} side={'rightSide'} />
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
