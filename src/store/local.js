class StoreLocal {
	get(key, defaultValue = null) {
		if (key in localStorage) {
			const value = localStorage.getItem(key);

			try {
				const obj = JSON.parse(value);
				return obj.v;
			} catch (ex) {
				return defaultValue === null ? value : defaultValue;
			}
		} else {
			return defaultValue;
		}
	}

	set(key, value) {
		const item = { v: value }; //, t: parseInt(Date.now() / 1000) };
		localStorage.setItem(key, JSON.stringify(item));
	}
}

export default new StoreLocal();
