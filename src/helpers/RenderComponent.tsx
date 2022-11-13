import { FC } from 'react'
import Home from '@components/pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalog from '@components/pages/catalog/Catalog'
import Profile from '@components/pages/profile/Profile'
import Cart from '@components/pages/cart/Cart'
import Layout from '@components/ui/Layout/Layout'
import Product from '@components/pages/product/Product'

import routes from '../routes.json'

const RenderComponentHelper: FC<{ path: string }> = ({ path }) => {
	switch (path) {
		case '/':
			return <Home />
		case '/catalog':
			return <Catalog />
		case '/cart':
			return <Cart />
		case '/profile':
			return <Profile />
		case '/product/:id':
			return <Product />
		default:
			return <Home />
	}
}

const RenderComponent: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((rout, index) => {
					const { path } = rout
					return (
						<Route
							key={`path-${index}`}
							path={path}
							element={
								<Layout>
									<RenderComponentHelper path={path} />
								</Layout>
							}
						/>
					)
				})}
			</Routes>
		</BrowserRouter>
	)
}

export default RenderComponent
