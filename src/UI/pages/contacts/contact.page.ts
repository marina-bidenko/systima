import { contacts } from "data/urls/webUrls";
import { step } from "helpers";
import { NewContactDialog } from "UI/components/dialogs/newContactDialog";
import { BaseApplicationPage } from "UI/pages/baseApplication.page";

export class ContactPage extends BaseApplicationPage {
	readonly url = contacts.contacts;
	readonly newContactDialog = new NewContactDialog(this.page);

	private newContactBtn = this.page.getByRole("button", { name: "Ny kontakt" });

	@step()
	async clickNewContactBtn(): Promise<void> {
		await this.newContactBtn.click();
	}
}
