export const MyObject = {
	fromKeys<K extends string, V>(keys: K[], value?: V): Record<K, V | undefined> {
		return Object.fromEntries(keys.map(key => [key, value])) as Record<K, V | undefined>;
	}
};
