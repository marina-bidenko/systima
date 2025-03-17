import { expect as base, Locator } from "@playwright/test";

export const expect = base.extend({
	async toHaveInputValueText(element: Locator, expectedValue: string) {
		let actualValue: string;
		try {
			actualValue = await element.inputValue();
		} catch {
			actualValue = await element.innerText();
		}

		if (actualValue.includes(expectedValue)) {
			return {
				pass: true,
				message: () => `✅ The input value matches the expected value: "${expectedValue}"`
			};
		} else {
			return {
				pass: false,
				message: () => `❌ Expected value: "${expectedValue}", but got: "${actualValue}"`
			};
		}
	}
});
