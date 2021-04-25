<script setup>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import AppSidebar from '@/appsidebar/AppSidebar.vue';
import StorageLocal from '~/store/local.js';
import { ref } from 'vue';

const sidebarStatusKey = 'sbStatus';
const sidebarOpen = ref(!!+StorageLocal.get(sidebarStatusKey, 1));

const sidebarToggle = () => {
	sidebarOpen.value = !sidebarOpen.value;

	if (sidebarOpen.value) {
		StorageLocal.set(sidebarStatusKey, 1);
	} else {
		StorageLocal.set(sidebarStatusKey, 0);
	}
};
</script>

<template>
<app-header :opened="sidebarOpen" @sidebarToggle="sidebarToggle" />
<main>
	<app-sidebar :opened="sidebarOpen" />
	<section class="main-content">
		<slot />
	</section>
</main>
<app-footer />
</template>

<style lang='scss'>
@import './app.scss';

#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	-webkit-font-smoothing: antialiased;
	background-color: $panel-background-color;
	color: $panel-color;
}

.main-content {
	display: flex;
	flex: 1 0 200px;
	position: relative;
}

main {
	display: flex;
	flex: 1 0;
}
</style>
