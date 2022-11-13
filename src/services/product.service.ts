import axios from 'axios'
// @ts-ignore
import { IProduct, IProductResponse } from '@types/Product.interface'

axios.defaults.baseURL = 'https://dummyjson.com/products'

export const ProductService = {
	async getProducts() {
		const response = await axios.get<IProductResponse>('')
		return response.data
	},

	async getProductById(id: string) {
		const response = await axios.get<IProduct>(`/${id}`)
		return response.data
	}
}
