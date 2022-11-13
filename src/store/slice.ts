import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from './types'

// @ts-ignore
import { IProduct } from '@types/Product.interface'

const initialState: IInitialState = {
	items: [],
	counter: 0,
	totalPrice: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCard: (state, action: PayloadAction<IProduct>) => {
			state.items = [...state.items, action.payload]
			state.totalPrice += action.payload.price
			state.counter++
		},
		removeFromCard: (state, action: PayloadAction<IProduct>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id)
			state.totalPrice -= action.payload.price
			state.counter--
		},
		removeAllFromCart: state => {
			state.items = []
			state.counter = 0
			state.totalPrice = 0
		}
	}
})
