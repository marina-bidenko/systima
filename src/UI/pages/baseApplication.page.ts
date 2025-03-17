import { expect } from "@playwright/test";
import { step } from "helpers";
import { AssertToContainText } from "typedefs/playwright/expects.typedefs";
import { Sidebar } from "UI/components/sidebar";
import { BasePage } from "UI/pages/base.page";

export abstract class BaseApplicationPage extends BasePage {
	protected successMessage = this.page.locator(".success");
	protected errorMessage = this.page.locator(".error-wrapper");
	protected inputError = this.page.locator(".error--text").getByRole("alert");

	readonly sidebar = new Sidebar(this.page);

	@step()
	async assertErrorIsVisible() {
		await expect(this.errorMessage).toBeVisible({ timeout: 10 * 1000 });
	}

	@step()
	async assertErrorText(text: string, options?: AssertToContainText): Promise<void> {
		await expect(this.errorMessage).toContainText(text, options);
	}

	@step()
	async assertSuccessIsVisible() {
		await expect(this.successMessage).toBeVisible({ timeout: 10 * 1000 });
	}

	@step()
	async assertInputErrorText(text: string, options?: AssertToContainText): Promise<void> {
		await expect(this.inputError).toContainText(text, options);
	}

	@step()
	async assertInputErrorTextIsVisible() {
		await expect(this.inputError).toBeVisible({ timeout: 10 * 1000 });
	}

	@step()
	async assertSuccessMessageText(text: string, options?: AssertToContainText): Promise<void> {
		await expect(this.successMessage).toContainText(text, options);
	}
}
