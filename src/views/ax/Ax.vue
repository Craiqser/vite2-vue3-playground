<script setup>
import AxForm from '@/ax/axform/AxForm.vue';
import AxTree from '@/ax/axtree/AxTree.vue';
import ElDrag from '@/eldrag/ElDrag.vue';

const treeData = { // Demo data.
	id: 0,
	name: 'Каталог товаров',
	childs: [
		{ id: 1, name: 'Без детей' },
		{ id: 2, name: 'Подкаталог, но пустой', childs: [] },
		{
			id: 3,
			name: 'Подкаталог с 1 товаром',
			childs: [
				{ id: 4, name: 'Товар 1' }
			]
		}
	]
};
</script>

<template>
<el-drag :dnd-selectors="'.ax-form-caption span'">
	<ax-form caption="Карточка товара - тест">
		<ax-tree :tree-data="treeData" />
	</ax-form>
</el-drag>
</template>
