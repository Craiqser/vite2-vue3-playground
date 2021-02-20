// import Cookies from 'js-cookie';
// import { sidebarStatusKey } from '~/config/app';

// const actions = {
// 	sidebarClose({ commit }) {
// 		commit('SIDEBAR_CLOSE');
// 	},
// 	sidebarToggle({ commit }) {
// 		commit('SIDEBAR_TOGGLE');
// 	}
// };

// const mutations = {
// 	SIDEBAR_CLOSE: state => {
// 		Cookies.set(sidebarStatusKey, 0);
// 		state.sidebar.opened = false;
// 	},
// 	SIDEBAR_TOGGLE: state => {
// 		state.sidebar.opened = !state.sidebar.opened;

// 		if (state.sidebar.opened) {
// 			Cookies.set(sidebarStatusKey, 1);
// 		} else {
// 			Cookies.set(sidebarStatusKey, 0);
// 		}
// 	}
// };

// const state = {
// 	sidebar: {
// 		opened: !!+Cookies.get(sidebarStatusKey)
// 	}
// };

// export default {
// 	actions,
// 	mutations,
// 	namespaced: true,
// 	state
// };
