<script setup>
import AxForm from '~/components/ax/axform/AxForm.vue';
import AxTree from '~/components/ax/axtree/AxTree.vue';

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
<ax-form>
	<ax-tree :treeData='treeData' />
</ax-form>
</template>
