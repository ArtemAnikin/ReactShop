import React from 'react'
import ReactDOM from 'react-dom/client'
import RenderComponent from './helpers/RenderComponent'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@store/store'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<QueryClientProvider client={queryClient}>
					<RenderComponent />
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
