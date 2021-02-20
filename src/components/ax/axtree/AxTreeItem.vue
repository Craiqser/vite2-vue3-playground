<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
	item: {
		default: {},
		required: true,
		type: Object
	}
});

const isFolder = props.item.childs && props.item.childs.length;
const isOpen = ref(false);

const nodeToggle = () => {
	if (isFolder) {
		isOpen.value = !isOpen.value;
	}
};
</script>

<template>
<li>
	<div @click='nodeToggle'>
		{{ item.name }}
		<span v-if='isFolder'>[{{ isOpen ? '-' : '+' }}]</span>
	</div>
	<ul v-show='isOpen' v-if='isFolder'>
		<ax-tree-item class='ax-tree-item' v-for='child in item.childs' :key='child.id' :item='child' />
	</ul>
</li>
</template>

<style scoped>
.ax-tree-item {
	color: black;
}
</style>
