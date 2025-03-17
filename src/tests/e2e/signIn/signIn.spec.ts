import { faker } from "@faker-js/faker";
import { loginPageErrors } from "data/errorMessages";
import { test } from "fixtures";

test.describe("Sign in", () => {

	test.beforeEach(async ({ application }) => {
		await application.loginPage.visit();
	});

	test("Successful Login", async ({ application, credentials, page }) => {
		await application.loginPage.login(credentials);
		await application.dashboardPage.waitForOpened();
	});

	test("Failed Login", async ({ application }) => {
		await application.loginPage.login({
			email: faker.internet.email(),
			password: faker.internet.password()
		});
		await application.loginPage.assertErrorIsVisible();
		await application.loginPage.assertErrorText(loginPageErrors.incorrectCreds);
	});
});
