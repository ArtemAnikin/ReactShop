import { FC } from 'react'
import { useTypedSelector } from '@hooks/useTypedSelector'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { useActions } from '@hooks/useActions'
import CartItem from './components/CartItem/CartItem'
import Button from '@ui/Button/Button'
import styles from './Cart.module.scss'
import TotalInfo from '@pages/cart/components/TotalInfo'

interface IClearCartButtonProps {
	removeAllFromCart: ActionCreatorWithoutPayload<'cart/removeAllFromCart'>
}
const ClearCartButton: FC<IClearCartButtonProps> = ({ removeAllFromCart }) => {
	return <Button onClick={() => removeAllFromCart()}>Remove all</Button>
}

const Cart: FC = () => {
	const { items, counter, totalPrice } = useTypedSelector(state => state.cart)

	const { removeAllFromCart } = useActions()

	return (
		<div className={styles.wrapper}>
			{items.length ? (
				<>
					<div className={styles.remove}>
						{<ClearCartButton removeAllFromCart={removeAllFromCart} />}
					</div>
					<div>
						{items.map((item, index) => (
							<CartItem product={item} key={`product-${index}`} />
						))}
					</div>
					<TotalInfo counter={counter} totalPrice={totalPrice} />
				</>
			) : (
				<span>Card is empty</span>
			)}
		</div>
	)
}

export default Cart
