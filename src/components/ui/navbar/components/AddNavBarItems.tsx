import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from '@ui/navbar/Navbar.module.scss'

interface INavBarItems {
	path: string
	component: string
	side: string
}

interface IAddNavBarItems {
	items: INavBarItems[]
	side: 'leftSide' | 'rightSide'
}

const AddNavBarItems: FC<IAddNavBarItems> = ({ items, side }) => {
	const sideItems = items.filter(item => item.side === side)

	return (
		<div className={styles[side]}>
			{sideItems.map(el => (
				<li key={el.component}>
					<Link to={el.path} data-item={el.component}>
						{el.component}
					</Link>
				</li>
			))}
		</div>
	)
}

export default AddNavBarItems
