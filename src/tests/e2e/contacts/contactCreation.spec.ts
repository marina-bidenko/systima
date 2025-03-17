import { expect } from "@playwright/test";
import { contactsErrorMessages } from "data/errorMessages";
import { contactsSuccessMessages } from "data/successMessages";
import { test } from "fixtures";
import { SidebarOptions } from "typedefs/components/sidebar.typedefs";

test.describe("Contact creation", () => {
	test.beforeEach(async ({ app }) => {
		await app.dashboardPage.visit();
		await app.dashboardPage.waitForOpened();
		await app.dashboardPage.sidebar.navigateTo(SidebarOptions.Contacts);
	});

	test("Contact creation - validation", async ({ app }) => {
		await app.contactsPage.clickNewContactBtn();
		await app.contactsPage.newContactDialog.clickSubmitBtn();
		await app.contactsPage.newContactDialog.assertInputErrorText(contactsErrorMessages.pleaseEnterName);
	});

	test("Contact Creation - Success", async ({ app }) => {
		await app.contactsPage.clickNewContactBtn();
		await app.contactsPage.newContactDialog.fillName("Test");
		await expect(async () => {
			await app.contactsPage.newContactDialog.clickSubmitBtn();
			await app.contactsPage.assertSuccessIsVisible({ timeout: 2000 });
		}).toPass({ timeout: 10 * 1000 });
		await app.contactsPage.assertSuccessMessageText(contactsSuccessMessages.contactSaved);
	});
});