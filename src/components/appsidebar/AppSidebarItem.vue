<script setup>
import { defineProps } from 'vue';

defineProps({
	opened: {
		default: true,
		required: false,
		type: Boolean
	},
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
		<span v-show='opened'>{{ routeName ? routeName : route }}</span>
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
		padding: 0 $sidebar-padding;
	}
}
</style>
