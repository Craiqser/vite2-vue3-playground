<script setup>
import { computed, defineProps, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { listenersAdd, listenersRemove } from './useElDrag.js';

const props = defineProps({
	dndSelectors: {
		default: '',
		require: false,
		type: String
	}
});

let dndActivators = [];
const el = ref(null);

const elClassOptions = {
	'dnd-act': { mode: 1, cursor: 'drag' }
};

let elDraggable = ref(false);
const elPos = reactive({ x: 0, y: 0 });
const elStyle = computed(() => ({ left: elPos.x, top: elPos.y }));

const dndStartHandler = (event) => {
	let elClass = 'dnd-act';
	document.body.style.cursor = elClassOptions[elClass].cursor;

	if (el.value.contains(event.target)) {
		elDraggable.value = true;
	}

	console.log('start');
	console.dir(event.target);
};

const dndMoveHandler = (event) => {
};

const dndStopHandler = (event) => {
	document.body.style.cursor = '';
	console.log('stop');
	console.dir(event.target);
};

onBeforeUnmount(() => {
	if (el && props.dndSelectors) {
		listenersRemove(dndStartHandler, dndMoveHandler, dndStopHandler);
	};
});

onMounted(() => {
	if (el && props.dndSelectors) {
		dndActivators = el.value.querySelectorAll(props.dndSelectors);
		dndActivators.forEach(element => {
			element.classList.add('dnd-act');
		});

		elPos.x = el.value.offsetLeft;
		elPos.y = el.value.offsetTop;

		listenersAdd(dndStartHandler, dndMoveHandler, dndStopHandler);
	};
});
</script>

<template>
<div ref='el' style='position: absolute;' :style='elStyle' :draggable='elDraggable'>
	<slot />
</div>
</template>
