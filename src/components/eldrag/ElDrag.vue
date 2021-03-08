<script setup>
import { computed, defineProps, onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps({
	dndSelectors: {
		default: '',
		require: false,
		type: String
	}
});

let dndActivators = [];
const el = ref(null);
const elDraggable = ref(false);
const elPosX = ref(0);
const elPosY = ref(0);

const elStyle = computed(() => ({
	position: 'absolute',
	left: elPosX.value + 'px',
	top: elPosY.value + 'px'
}));

const mousePos = {x: 0, y: 0};

const dragEndHandler = (event) => {
	elDraggable.value = false;
	elPosX.value += (event.clientX - mousePos.x);
	elPosY.value += (event.clientY - mousePos.y);
};

const dragoverHandler = (event) => event.preventDefault();

const dragStartHandler = (event) => {
	mousePos.x = event.clientX;
	mousePos.y = event.clientY;
};

const mousedownHandler = (event) => {
	elDraggable.value = true;
	event.stopPropagation();
};

onBeforeUnmount(() => {
	dndActivators.forEach(element => {
		element.classList.remove('dnd-act');
		element.removeEventListener('mousedown', mousedownHandler);
	});

	if (el.value.parentElement) {
		el.value.parentElement.removeEventListener('dragover', dragoverHandler);
	}
});

onMounted(() => {
	if (el && props.dndSelectors) {
		dndActivators = el.value.querySelectorAll(props.dndSelectors);
		dndActivators.forEach(element => {
			element.classList.add('dnd-act');
			element.addEventListener('mousedown', mousedownHandler, true);
		});

		elPosX.value = el.value.offsetLeft;
		elPosY.value = el.value.offsetTop;

		if (el.value.parentElement) {
			el.value.parentElement.addEventListener('dragover', dragoverHandler);
		}
	};
});
</script>

<template>
<div ref='el' :style='elStyle' :draggable='elDraggable' @dragstart.stop='dragStartHandler' @dragend.stop='dragEndHandler'>
	<slot />
</div>
</template>

<style>
.dnd-act { cursor: move; }
</style>
