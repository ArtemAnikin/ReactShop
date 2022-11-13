import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

interface IAlias {
	find: string
	path: string
}
const alias: IAlias[] = [
	{
		find: '@assets',
		path: './src/assets/'
	},
	{
		find: '@components',
		path: './src/components/'
	},
	{
		find: '@pages',
		path: './src/components/pages/'
	},
	{
		find: '@ui',
		path: './src/components/ui/'
	},
	{
		find: '@helpers',
		path: './src/helpers/'
	},
	{
		find: '@hooks',
		path: './src/hooks/'
	},
	{
		find: '@services',
		path: './src/services/'
	},
	{
		find: '@store',
		path: './src/store/'
	},
	{
		find: '@types',
		path: './src/types/'
	}
]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: alias.map(el => {
			return { find: el.find, replacement: path.resolve(__dirname, el.path) }
		})
	}
})
