import WindiCSS from 'vite-plugin-windicss';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

const config = {
	plugins: [
		vue(),
		WindiCSS({ safelist: '' })
	],
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
			'@/': `${resolve(__dirname, 'src')}/components/`
		}
	},
	server: {
		port: 3000
	}
};

export default config;
