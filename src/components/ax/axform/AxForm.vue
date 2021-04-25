<script setup>
import AxFormCaption from './AxFormCaption.vue';
import { defineProps } from 'vue';

defineProps({
	caption: {
		default: 'Form caption',
		required: false,
		type: String
	}
});
</script>

<template>
<div class="ax-form">
	<ax-form-caption ico="">{{ caption }}</ax-form-caption>
	<div><slot /></div>
</div>
</template>

<style scoped lang='scss'>
@import './../theme/theme-ax-panel.scss';

.ax-form {
	min-height: $panel-height-min;
	min-width: $panel-width-min;

	height: 150px;
	width: 500px;

	@include panel-border;
	background-color: $panel-background-color;
	cursor: default;
	overflow: hidden;
}
</style>
