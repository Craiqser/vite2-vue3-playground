const pages = [
	{
		component: () => import('~/pages/404.vue'),
		name: '404',
		path: '/404'
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: { name: '404' }
	}
];

export default pages;
