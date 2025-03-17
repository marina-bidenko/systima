import { ENV } from "data/envs";
import { TCredentials } from "typedefs/fixtures.typedefs";
import { Application } from "UI/application";
import { test as base } from "./worker.fixture";

export const test = base.extend<{
	credentials: TCredentials;
	application: Application;
	app: Application;
}>({
	credentials: {
		email: ENV.USER_EMAIL as string,
		password: ENV.PASSWORD as string
	},
	application: async ({ page }, use) => {
		await use(new Application(page));
	},
	app: async ({ userPath, browser }, use) => {
		const context = await browser.newContext({ storageState: userPath });
		const page = await context.newPage();

		await use(new Application(page));
	}
});