import { Locator } from "@playwright/test";

export interface TwoButtons {
	readonly submitBtn: Locator;
	readonly cancelBtn: Locator;

	clickSubmitBtn(): Promise<void>;

	clickCancelBtn(): Promise<void>;
}