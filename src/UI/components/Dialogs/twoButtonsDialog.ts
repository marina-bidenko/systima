import { step } from "helpers";
import { TwoButtons } from "typedefs/main.typedefs";
import { BaseDialog } from "UI/components/Dialogs/baseDialog";

export abstract class TwoButtonsDialog extends BaseDialog implements TwoButtons {
	readonly submitBtn = this.container.locator(`button[type="submit"]`);
	readonly cancelBtn = this.container.locator(`button[type="button"]`);

	@step()
	async clickSubmitBtn(): Promise<void> {
		await this.submitBtn.click();
	}

	@step()
	async clickCancelBtn(): Promise<void> {
		await this.cancelBtn.click();
	}
}