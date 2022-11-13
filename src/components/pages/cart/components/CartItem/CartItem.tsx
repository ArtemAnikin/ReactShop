import { FC } from 'react'
import { Link } from 'react-router-dom'
import { priceFormater } from '@helpers/priceFormater'
import { useActions } from '@hooks/useActions'
// @ts-ignore
import { IProduct } from '@types/Product.interface'
import styles from './CartItem.module.scss'

interface ICartItemProps {
	product: IProduct
}

const CartItem: FC<ICartItemProps> = ({ product }) => {
	const { thumbnail, title, price, id, description } = product

	const { removeFromCard } = useActions()

	return (
		<div className={styles.wrapper}>
			<Link to={`/product/${id}`} className={styles.image}>
				<div style={{ backgroundImage: `url(${thumbnail})` }} />
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{title}</div>
				<div className='description'>{description}</div>
				<div className={styles.controls}>
					<span>{priceFormater(price)}</span>
					<button className='btn btn-outline-primary'>
						Add to favourite list
					</button>
					<button
						className='btn btn-outline-danger'
						onClick={() => removeFromCard(product)}
					>
						remove
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
