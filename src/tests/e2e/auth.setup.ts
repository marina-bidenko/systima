import { ENV } from "data/envs";
import { test as setup } from "fixtures";

setup("Authenticate as user", async ({ application, page, userPath }) => {
	await application.loginPage.visit();
	await application.loginPage.login({
		email: ENV.USER_EMAIL as string,
		password: ENV.PASSWORD as string
	});
	await application.dashboardPage.waitForOpened();
	await page.context().storageState({ path: userPath });
});