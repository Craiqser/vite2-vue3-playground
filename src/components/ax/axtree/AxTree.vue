<script setup>
import AxTreeItem from './AxTreeItem.vue';
import { defineProps } from 'vue';

defineProps({
	treeData: {
		require: true,
		type: Object
	}
});
</script>

<template>
<ul class="ax-tree">
	<ax-tree-item :item="treeData" />
</ul>
</template>

<style lang='scss' scoped>
@import './../theme/theme-ax';
@import './../theme/theme-ax-panel';

.ax-tree {
	background-color: $border-color-light;
	color: $font-color;
}
</style>
