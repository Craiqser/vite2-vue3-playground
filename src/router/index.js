import { createRouter, createWebHistory } from 'vue-router';
import Admin from '~/views/Admin.vue';
import Ax from '~/views/ax/Ax.vue';
import Dashboard from '~/views/Dashboard.vue';
import Projects from '~/views/Projects.vue';
import Settings from '~/views/Settings.vue';
import pages from './routes/pages';

const routes = [
	{
		path: '/admin',
		name: 'Admin',
		component: Admin
	},
	{
		path: '/ax',
		name: 'Ax',
		component: Ax
		// meta: { layout: 'ax' }
	},
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/prj',
		name: 'Projects',
		component: Projects
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes: [...pages, ...routes],
	strict: true
});

// router.beforeEach((to, from, next) => {
// 	next();
// });

export default router;
