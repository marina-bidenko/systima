export enum SidebarOptions {
	CompanyOverview = "Selskapsoversikt",
	Overview = "Oversikt",
	Accounting = "Bokføring",
	BankReconciliation = "Bankavstemming",
	Invoice = "Faktura",
	Contacts = "Kontakter",
	Products = "Produkter",
	Employees = "Ansatte",
	Timekeeping = "Timeføring",
	Wages = "Lønn",
	Reports = "Rapporter",
	Settings = "Innstillinger"
}

export enum AccountingOptions {
	FilmReception = "Filmottak",
	PostApprovedFiles = "Bokfør godkjente filer",
	PostOthersFiles = "Bokfør andre filer",
	VATReport = "Mva. rapport"
}

export enum SettingsOptions {
	Departments = "Avdelinger",
	BankReconciliationSettings = "Bankavstemninginnst",
	PaymentSettings = "Betalingsinnstillinger",
	InvoiceSettings = "Fakturainnstillinger",
	Integrations = "Integrasjoner",
	ChartOfAccounts = "Kontoplan",
	SalarySettings = "Lønnsinnstillinger",
	LockPeriod = "Låste perioder",
	Modules = "Moduler",
	VATSettings = "Mva. innstillinger",
	Projects = "Prosjekter",
	CompanySettings = "Selskapsinnstillinger",
	TimesheetsSettings = "Timeføringsinnstillinger",
	OpeningBalance = "Åpningsbalanse"
}

export enum ReportsOptions {
	BalanceReport = "Balanserapport",
	VouchersJournal = "Bilagsjournal",
	HolidayPayList = "Feriepengeliste",
	GeneralLedger = "Hovedbok",
	VATSpecification = "Mva. spesifikasjon",
	SupplierAccounts = "Reskontro",
	IncomeReport = "Resultatrapport",
	TrialBalance = "Saldobalanse",
	CompilationReport = "Sammenstillingsrapport"
}

export interface SidebarOptionMap {
	[SidebarOptions.Accounting]: AccountingOptions;
	[SidebarOptions.Reports]: ReportsOptions;
	[SidebarOptions.Settings]: SettingsOptions;
}
