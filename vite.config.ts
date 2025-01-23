import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src'),
			},
			{
				find: '@components',
				replacement: path.resolve(__dirname, 'src/components'),
			},
			{
				find: '@contexts',
				replacement: path.resolve(__dirname, 'src/contexts'),
			},
			{
				find: '@services',
				replacement: path.resolve(__dirname, 'src/services'),
			},
			{
				find: '@config',
				replacement: path.resolve(__dirname, 'src/config'),
			},
			{
				find: '@interfaces',
				replacement: path.resolve(__dirname, 'src/models/interfaces'),
			},
			{
				find: '@enums',
				replacement: path.resolve(__dirname, 'src/models/enums'),
			},
			{
				find: '@assets',
				replacement: path.resolve(__dirname, 'src/assets'),
			},
			{
				find: '@utils',
				replacement: path.resolve(__dirname, 'src/utils'),
			},
			{
				find: '@static',
				replacement: path.resolve(__dirname, 'src/static'),
			},
			{
				find: '@models',
				replacement: path.resolve(__dirname, 'src/models'),
			},
		],
	},
});
