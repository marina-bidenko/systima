import { test, expect } from "@playwright/test";
import { BaseComponent } from "UI/components/baseComponent";

export abstract class BasePage extends BaseComponent {
	abstract url: string;

	static isPage(obj: Object): obj is BasePage {
		return "url" in obj;
	}

	async visit() {
		await test.step(`Visit page ${this.url}`, async () => {
			await this.page.goto(this.url);
		})
	}

	async assertIsOpened() {
		await test.step(`Assert the page with url - '${this.url}' is opened`, async () => {
			await expect(this.page).toHaveURL(this.url);
		});
	}

	async waitForOpened() {
		await test.step(`Wait for the page with url - '${this.url}' to open`, async () => {
			await this.page.waitForURL(this.url);
		});
	}
}