<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
	x: {
		default: 5,
		required: false,
		type: Number,
		validator: function(value) {
			return value >= 0;
		}
	},
	y: {
		default: 5,
		required: false,
		type: Number,
		validator: function(value) {
			return value >= 0;
		}
	}
});

const elStyle = computed(() => ({
	left: props.x + 'px',
	top: props.y + 'px'
}));
</script>

<template>
<div class='eldrag' :style='elStyle'>
	<slot />
</div>
</template>

<style lang='scss'>
.eldrag {
	position: absolute;
}
</style>