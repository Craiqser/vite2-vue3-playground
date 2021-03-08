import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss';

const config = {
	plugins: [
		vue(),
		WindiCSS({ safelist: '' })
	],
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
			'@/': `${resolve(__dirname, 'src')}/components/`,
		}
	},
	server: {
		port: 3000
	}
};

export default config;
