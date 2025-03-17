import { CurrencyOptions } from "typedefs/accounting/data.typedefs";

export interface PurchaseForm {
	contact: string;
	amount: number;
	currency: CurrencyOptions;
	invoiceDate: string;
	dueDate: string;
	account: string;
	invoiceNumber: string;
}