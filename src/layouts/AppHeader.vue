<script setup>
import { defineEmit, defineProps } from 'vue';
import Hamburger from '~/components/Hamburger.vue';

defineEmit(['sidebarToggle']);

defineProps({
	opened: {
		required: true,
		type: Boolean
	}
});
</script>

<template>
<header>
	<hamburger :opened='opened' @toggle="$emit('sidebarToggle')" />
	<div class='menu-top'>
		<span>MenuItem</span>
	</div>
</header>
</template>

<style scoped lang='scss'>
@import './app.scss';

header {
	align-items: center;
	display: flex;
	height: $header-height;
	overflow: hidden;

	background-color: $header-background-color;
	color: $header-color;

	.menu-top {
		display: flex;
		align-items: center;
		height: 100%;
		border-left: $panel-background-color dashed 1px;
	}
}

span { margin: 0 5px; }
</style>
