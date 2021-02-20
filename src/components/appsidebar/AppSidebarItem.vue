<script setup>
import { defineProps } from 'vue';

defineProps({
	route: {
		require: true,
		type: String
	},
	routeName: {
		default: '',
		require: false,
		type: String
	}
});
</script>

<template>
<router-link :to='{ name: route }'>
	<div>
		<slot />
		<span>{{ routeName ? routeName : route }}</span>
	</div>
</router-link>
</template>

<style scoped lang='scss'>
@import '~/layouts/app.scss';

div {
	display: flex;
	align-items: center;

	span {
		margin-left: $sidebar-padding;
		padding-left: $sidebar-padding;
	}
}
</style>
