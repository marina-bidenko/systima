import { postOtherFilesPageErrorMessages } from "data/errorMessages";
import { postOtherFilesPageSuccessMessages } from "data/successMessages";
import { purchaseForm } from "data/testData/purchase";
import { test } from "fixtures";
import { MyObject } from "helpers";
import { SidebarOptions, AccountingOptions } from "typedefs/components/sidebar.typedefs";

test.describe("Create purchase", () => {
	test.beforeEach(async ({ app }) => {
		await app.dashboardPage.visit();
		await app.dashboardPage.waitForOpened();
		await app.dashboardPage.sidebar.navigateTo(SidebarOptions.Accounting, AccountingOptions.PostOthersFiles);
	});

	test("Create new purchase", async ({ app }) => {
		await app.postOtherFilesPage.fillPurchaseForm(purchaseForm);
		await app.postOtherFilesPage.clickPostBtn();
		await app.postOtherFilesPage.assertSuccessIsVisible();
		await app.postOtherFilesPage.assertSuccessMessageText(postOtherFilesPageSuccessMessages.documentCreated);
		await app.postOtherFilesPage.validateFormData(MyObject.fromKeys(Object.keys(purchaseForm), ""));
	});

	test("Duplicate Invoice Number Handling", async ({ app }) => {
		const data = { ...purchaseForm, invoiceNumber: "1" };
		await app.postOtherFilesPage.fillPurchaseForm(data);
		await app.postOtherFilesPage.clickPostBtn();
		await app.postOtherFilesPage.assertInputErrorTextIsVisible();
		await app.postOtherFilesPage.assertInputErrorText(postOtherFilesPageErrorMessages.invoiceAlreadyPosted);
		await app.postOtherFilesPage.validateFormData(data);
	});
});