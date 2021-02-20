<script setup>
import { defineProps } from 'vue';

defineProps({
	code: {
		required: true,
		type: Number
	},
	descr: {
		default: null,
		required: false,
		type: String
	}
});
</script>

<template>
<div class='error-view'>
	<h1 class='code'>{{ `{ ${code} }` }}</h1>
	<p class='descr'>{{ descr }}</p>
</div>
</template>

<style lang='scss' scoped>
.error-view {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;

	.code {
		color: #6C757D;
		font-family: 'Segoe UI';
		font-size: 120px;
		font-weight: normal;
	}

	.descr {
		margin-top: 30px;
		color: #c7c77c;
		font-size: 16px;
		font-weight: 400;
	}
}
</style>
