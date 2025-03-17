import { Locator } from "@playwright/test";
import { accounting } from "data/urls/webUrls";
import { expect } from "fixtures/expect.fixture";
import { step, isLocator } from "helpers";
import { CurrencyOptions } from "typedefs/accounting/data.typedefs";
import { PurchaseForm } from "typedefs/accounting/purchase.typedefs";
import { BaseApplicationPage } from "UI/pages/baseApplication.page";

export class PostOtherFilesPage extends BaseApplicationPage {
	readonly url = accounting.postOtherFile;

	private contactInput = this.page.getByRole("button", { name: "Kontakt (valgfri ved kvittering)" });
	private amountInput = this.page.getByLabel("Totalt beløp inkl. mva. *");
	private currencyInput = this.page.getByTestId("currency-select");
	private options = this.page.getByRole("option");
	private invoiceDateInput = this.page.getByLabel("Fakturadato *");
	private dueDateInput = this.page.getByLabel("Forfallsdato");
	private invoiceNumberInput = this.page.getByLabel("Fakturanr.");
	private accountInput = this.page.getByRole("button", { name: "Konto *" });
	private postBtn = this.page.getByRole("button", { name: "Bokfør", exact: true });


	@step()
	async selectContact(contact: string): Promise<void> {
		await this.contactInput.click();
		await this.options.filter({ hasText: contact }).click();
	}

	@step()
	async fillAmount(amount: number): Promise<void> {
		await this.amountInput.fill(amount.toString());
	}

	@step()
	async selectCurrency(currency: CurrencyOptions): Promise<void> {
		await this.currencyInput.click();
		await this.options.filter({ hasText: currency }).click();
	}

	@step()
	async fillInvoiceDate(invoiceDate: string): Promise<void> {
		await this.invoiceDateInput.fill(invoiceDate);
	}

	@step()
	async fillDueDate(dueDate: string): Promise<void> {
		await this.dueDateInput.fill(dueDate);
	}

	@step()
	async selectAccount(account: string): Promise<void> {
		await this.accountInput.click();
		await this.options.filter({ hasText: account }).click();
	}

	@step()
	async fillInvoiceNumber(invoiceNumber: string) {
		await this.invoiceNumberInput.fill(invoiceNumber);
	}

	@step()
	async fillPurchaseForm({
		                       contact,
		                       account,
		                       amount,
		                       currency,
		                       invoiceDate,
		                       dueDate,
		                       invoiceNumber
	                       }: Partial<PurchaseForm>): Promise<void> {
		contact && await this.selectContact(contact);
		amount && await this.fillAmount(amount);
		currency && await this.selectCurrency(currency);
		invoiceDate && await this.fillInvoiceDate(invoiceDate);
		dueDate && await this.fillDueDate(dueDate);
		account && await this.selectAccount(account);
		invoiceNumber && await this.fillInvoiceNumber(invoiceNumber);
	}

	@step()
	async validateFormData(
		inputs: Partial<PurchaseForm>,
	): Promise<void> {
		await Promise.all(
			Object.entries(inputs).map(async ([key, value]) => {
				const input = this.getInputLocator(`${key}Input` as keyof PostOtherFilesPage);

				await expect.soft(input).toHaveInputValueText(String(value));
			})
		);
	}

	private getInputLocator(key: keyof PostOtherFilesPage): Locator {
		const locator = this[key];

		if (!isLocator(locator)) {
			throw new Error(`The ${key} property is not locator`);
		}

		return locator;
	}

	@step()
	async clickPostBtn(): Promise<void> {
		await this.postBtn.click();
	}
}