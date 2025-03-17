import { Locator } from "@playwright/test";

export function isLocator(obj: unknown): obj is Locator {
	return !!obj && typeof obj === "object" &&
		"nth" in obj && typeof obj.nth === "function";
}
