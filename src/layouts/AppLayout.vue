<script setup>
import { ref } from 'vue';
import Cookies from 'js-cookie';

import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import AppSidebar from '~/components/appsidebar/AppSidebar.vue';

const sidebarStatusKey = 'sbStatus';
const sidebarOpen = ref(!!+Cookies.get(sidebarStatusKey));

const sidebarToggle = () => {
	sidebarOpen.value = !sidebarOpen.value;

	if (sidebarOpen.value) {
		Cookies.set(sidebarStatusKey, '1');
	} else {
		Cookies.set(sidebarStatusKey, '0');
	}
}
</script>

<template>
<app-header :opened='sidebarOpen' @sidebarToggle='sidebarToggle' />
<main class='sb' :class="{ 'sb-open': sidebarOpen }">
	<app-sidebar />
	<section class='main-content'><slot /></section>
</main>
<app-footer />
</template>

<style lang='scss'>
@import './app.scss';

#app {
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;

	-webkit-font-smoothing: antialiased;
	background-color: $panel-background-color;
	color: $panel-color;
}

.main-content {
	position: relative;
}

.sb {
	display: grid;
	grid-template-columns: $sidebar-width auto;
}

.sb-open {
	grid-template-columns: $sidebar-open-width auto;
}
</style>
