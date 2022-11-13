import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import Loader from '@ui/Loader/Loader'
import ProductItem from '@ui/ProductItem/ProductItem'
import { ProductService } from '@services/product.service'
// @ts-ignore
import { IProduct } from '@types/Product.interface'
import styles from './Catalog.module.scss'

interface IPrintProducts {
	products?: IProduct[]
}

const PrintProducts: FC<IPrintProducts> = ({ products }) => {
	return products?.length ? (
		<div className={styles.productsWrapper}>
			{products.map(product => (
				<ProductItem key={`product-${product.id}`} product={product} />
			))}
		</div>
	) : (
		<h1>Cant fina any product</h1>
	)
}

const Catalog: FC = () => {
	const { data: products, isLoading } = useQuery(
		['products'],
		() => ProductService.getProducts(),
		{
			select: ({ products }) => products
		}
	)

	return <>{isLoading ? <Loader /> : <PrintProducts products={products} />}</>
}

export default Catalog
