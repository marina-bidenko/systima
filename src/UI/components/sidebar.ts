import { step } from "helpers";
import { SidebarOptions, SidebarOptionMap } from "typedefs/components/sidebar.typedefs";
import { BaseComponent } from "UI/components/baseComponent";


export class Sidebar extends BaseComponent {
	private navigation = this.page.locator("a.v-list-item");
	private navigationGroup = this.page.locator(".v-list-group");

	async navigateTo(option: SidebarOptions): Promise<void>;
	async navigateTo<T extends keyof SidebarOptionMap>(option: T, subOptions: SidebarOptionMap[T]): Promise<void>;
	@step()
	async navigateTo<T extends keyof SidebarOptionMap>(option: SidebarOptions, subOptions?: SidebarOptionMap[T]): Promise<void> {
		switch (option) {
			case SidebarOptions.Accounting:
			case SidebarOptions.Reports:
			case SidebarOptions.Settings:
				await this.navigationGroup.filter({ hasText: option }).click();
				return this.navigation.filter({ hasText: subOptions }).first().click();
			default:
				await this.navigation.filter({ hasText: option }).first().click();
		}
	}
}
