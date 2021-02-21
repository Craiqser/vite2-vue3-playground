<script setup>
import { computed, onMounted, ref } from 'vue';

const box = {
	height: 0,
	width: 0
};

const el = ref(null);
let elParent = null;

const xy = ref({
	x: 50,
	y: 40
});

const elStyle = computed(() => ({
	left: xy.value.x + 'px',
	top: xy.value.y + 'px'
}));

onMounted(() => {
	console.dir(el.value);
	xy.value.x = el.value.clientLeft;
	xy.value.y = el.value.clientTop;
	elParent = el.value.parentElement;
	box.height = elParent.clientHeight;
	box.width = elParent.clientWidth;
	console.log(xy.value.x, xy.value.y, box.width, box.height);
});
</script>

<template>
<div ref='el' style='position: absolute' :style='elStyle'>
	<slot />
</div>
</template>
