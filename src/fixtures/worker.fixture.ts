import { test as base } from "@playwright/test";

export const test = base.extend<{
	userPath: string;
}>({
	userPath: "playwright/.auth/user.json"
});