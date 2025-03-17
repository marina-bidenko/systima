import { BaseComponent } from "UI/components/baseComponent";

export abstract class BaseDialog extends BaseComponent {
	protected container = this.page.getByRole("dialog");
}
