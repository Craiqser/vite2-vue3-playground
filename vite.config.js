import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const config = {
	plugins: [vue()],
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
