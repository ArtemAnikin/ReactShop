import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@services/product.service'
import Loader from '@ui/Loader/Loader'
import PrintProduct from '@pages/product/components/PrintProducts'

// @ts-ignore
import { IProduct } from '@types/Product.interface'
import { useActions } from '@hooks/useActions'
import { useTypedSelector } from '@hooks/useTypedSelector'

function undefinedProduct() {
	return <h2>Cant find product</h2>
}

const Product: FC = () => {
	const params = useParams()

	const { items } = useTypedSelector(state => state.cart)

	const { addToCard, removeFromCard } = useActions()

	const { data: product, isLoading } = useQuery(['product', params.id], () =>
		ProductService.getProductById(params.id || '')
	)

	const isInCart = () => {
		return items.some(item => item.id === product?.id)
	}

	return isLoading ? (
		<Loader />
	) : product ? (
		<PrintProduct
			product={product}
			isInCart={isInCart()}
			addToCard={addToCard}
			removeFromCard={removeFromCard}
		/>
	) : (
		undefinedProduct()
	)
}

export default Product
