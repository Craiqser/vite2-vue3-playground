<script setup>
import { defineProps } from 'vue';

import AxFormCaption from './AxFormCaption.vue';
import ElDrag from './../../eldrag/ElDrag.vue';

defineProps({
	caption: {
		default: 'Form caption',
		required: false,
		type: String
	}
});
</script>

<template>
<el-drag>
	<div class='ax-form'>
		<ax-form-caption ico=''>{{ caption }}</ax-form-caption>
		<div><slot /></div>
	</div>
</el-drag>
</template>

<style scoped lang='scss'>
@import './../theme/theme-ax-panel.scss';

.ax-form {
	min-height: $panel-height-min;
	min-width: $panel-width-min;

	@include panel-border;
	background-color: $panel-background-color;
	cursor: default;
	overflow: hidden;
}
</style>
