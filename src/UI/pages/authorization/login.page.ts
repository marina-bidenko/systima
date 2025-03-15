import { expect } from "@playwright/test";
import { authorization } from "data/urls/webUrls";
import { step } from "helpers";
import { TCredentials } from "typedefs/fixtures.typedefs";
import { AssertToContainText } from "typedefs/playwright/expects.typedefs";
import { BasePage } from "UI/pages/base.page";

export class LoginPage extends BasePage {
	readonly url = authorization.login;
	private email = this.page.getByLabel("E-post");
	private password = this.page.getByLabel("Passord");
	private submitBtn = this.page.locator("[type=\"submit\"]");
	private errorMessage = this.page.locator(".error-wrapper");

	@step()
	async fillEmail(email: string): Promise<void> {
		await this.email.fill(email);
	}

	@step()
	async fillPassword(password: string): Promise<void> {
		await this.password.fill(password);
	}

	@step()
	async clickSubmit(): Promise<void> {
		await this.submitBtn.click();
	}

	@step()
	async login({ email, password }: TCredentials): Promise<void> {
		await this.fillEmail(email);
		await this.fillPassword(password);
		await this.clickSubmit();
	}

	@step()
	async assertErrorIsVisible() {
		await expect(this.errorMessage).toBeVisible();
	}

	@step()
	async assertErrorText(text: string, options?: AssertToContainText): Promise<void> {
		await expect(this.errorMessage).toContainText(text, options);
	}
}