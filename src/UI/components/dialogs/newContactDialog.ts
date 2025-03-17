import { expect } from "@playwright/test";
import { step } from "helpers";
import { AssertToContainText } from "typedefs/playwright/expects.typedefs";
import { TwoButtonsDialog } from "UI/components/dialogs/twoButtonsDialog";

export class NewContactDialog extends TwoButtonsDialog {
	private inputError = this.page.locator(".error--text").getByRole("alert").first();
	private nameInput = this.page.getByLabel("Navn *");

	@step()
	async assertInputErrorText(text: string, options?: AssertToContainText): Promise<void> {
		await expect(this.inputError).toContainText(text, options);
	}

	@step()
	async assertInputErrorTextIsVisible() {
		await expect(this.inputError).toBeVisible({ timeout: 10 * 1000 });
	}

	@step()
	async fillName(name: string): Promise<void> {
		await this.nameInput.fill(name);
	}
}