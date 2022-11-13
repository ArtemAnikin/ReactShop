import styles from '@pages/cart/Cart.module.scss'
import { priceFormater } from '@helpers/priceFormater'
import Button from '@ui/Button/Button'

function printItemsCounter(counter: number) {
	return counter + (counter === 1 ? ' item' : ' items')
}

const TotalInfo = ({
	counter,
	totalPrice
}: {
	counter: number
	totalPrice: number
}) => {
	return (
		<div className={styles.infoWrapper}>
			<div className={styles.info}>
				<div className={styles.orderInfo}>
					<div>
						<span>counter</span> <p> {printItemsCounter(counter)} </p>
					</div>
					<div className={styles.price}>{priceFormater(totalPrice)}</div>
				</div>
				<Button>Checkout</Button>
			</div>
		</div>
	)
}

export default TotalInfo
