import { companyEndpoints } from "helpers/urls.helper";

export const authorization = {
	login: "/login"
} as const;

export const overview = companyEndpoints("/systimaas7", {
	dashboard: "/dashboard"
})