import { companyEndpoints } from "helpers";

const systimaas7 = "/systimaas7";

export const authorization = {
	login: "/login"
} as const;

export const overview = companyEndpoints(systimaas7, {
	dashboard: "/dashboard"
});

export const accounting = companyEndpoints(systimaas7, {
	postOtherFile: "/bookkeeping/purchase"
});

export const contacts = companyEndpoints(systimaas7, {
	contacts: "/contacts",
});