<script setup>
import { computed, defineProps, onMounted, ref } from 'vue';

defineProps({
	dragSelectors: {
		default: '',
		require: false,
		type: String
	}
});

let dragElements = [];
const dragging = false;

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
	if (dragSelectors) {
		dragElements = el.value.querySelectorAll(dragSelectors);
		dragElements.forEach(element => {
			element.classList.add('drag-act');
		});
	}
	console.dir(el.value);
	console.dir(dragElements);
	// xy.value.x = el.value.clientLeft;
	// xy.value.y = el.value.clientTop;
	// elParent = el.value.parentElement;
	// box.height = elParent.clientHeight;
	// box.width = elParent.clientWidth;
	// console.log(xy.value.x, xy.value.y, box.width, box.height);
});
</script>

<template>
<div ref='el' style='position: absolute' :style='elStyle'>
	<slot />
</div>
</template>
