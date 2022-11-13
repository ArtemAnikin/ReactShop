import { FC } from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import { IProduct } from '@types/Product.interface'
import { priceFormater } from '@helpers/priceFormater'
import styles from './ProductItem.module.scss'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const { thumbnail, title, price, id, description } = product

	return (
		<div className={styles.item}>
			<Link className={styles.image} to={`/product/${id}`}>
				<div style={{ backgroundImage: `url(${thumbnail})` }} />
			</Link>
			<div className={styles.title}>{title}</div>
			<div className={styles.info}>
				<div className={styles.desc}>{description}</div>
				<div className={styles.price}>{priceFormater(price)}</div>
			</div>
		</div>
	)
}

export default ProductItem
