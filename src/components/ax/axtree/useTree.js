import { unref } from 'vue';

export function useTree(treeData) {
	function filterByLevel(level = 1, levelCurrent = 1, list) {
		const ret = [];
		const data = list || unref(treeData) || [];

		for (let i = 0; i < data.length; i++) {
			const item = data[i];
			ret.push(item.id);

			const childs = item.childs ?? [];

			if (childs && childs.length && levelCurrent < level) {
				levelCurrent++;
				ret.push(...filterByLevel(level, levelCurrent, childs));
			}
		}

		return ret;
	}

	return { filterByLevel };
}
