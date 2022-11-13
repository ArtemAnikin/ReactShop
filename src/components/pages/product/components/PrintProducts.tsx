import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

// @ts-ignore
import { IProduct } from '@types/Product.interface'
import { priceFormater } from '@helpers/priceFormater'
import Button from '@ui/Button/Button'
import styles from './PrintProducts.module.scss'

interface IPrintProduct {
	product: IProduct
	isInCart: boolean
	addToCard: ActionCreatorWithPayload<IProduct, 'cart/addToCard'>
	removeFromCard: ActionCreatorWithPayload<IProduct, 'cart/removeFromCard'>
}

const PrintProduct: FC<IPrintProduct> = ({
	product,
	isInCart,
	removeFromCard,
	addToCard
}) => {
	const { thumbnail, price, title, description } = product
	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<Link to={'/catalog'} className={styles.back}>
					X
				</Link>
				<div
					className={styles.image}
					style={{ backgroundImage: `url(${thumbnail})` }}
				/>
				<div className={styles.info}>
					<div className={styles.title}>{title}</div>
					<div className={styles.desc}>{description}</div>
					<div className={styles.control}>
						<div className={styles.price}>{priceFormater(price)}</div>
						<Button
							onClick={() =>
								isInCart ? removeFromCard(product) : addToCard(product)
							}
						>
							{isInCart ? 'Remove' : 'Add to cart'}
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PrintProduct
