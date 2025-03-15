export function companyEndpoints<T extends Record<string, `/${string}`>>(company: `/${string}`, endpoints: T): Record<keyof T, string> {
	return Object.entries(endpoints).reduce((result, [key, value]) => {
		result[key] = `${company}${value}`;

		return result;
	}, {} as Record<string, string>) as T;
}