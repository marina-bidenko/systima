import { test as base } from "@playwright/test";
import { ENV } from "data/envs";
import { TCredentials } from "typedefs/fixtures.typedefs";
import { Application } from "UI/application";

export const test = base.extend<{
	credentials: TCredentials;
	application: Application;
}>({
	credentials: {
		email: ENV.USER_EMAIL as string,
		password: ENV.PASSWORD as string
	},
	application: async ({ page }, use) => {
		await use(new Application(page));
	},
});