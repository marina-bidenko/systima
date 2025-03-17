import { BaseComponent } from "UI/components/baseComponent";
import { PostOtherFilesPage } from "UI/pages/accounting/postOtherFiles.page";
import { LoginPage } from "UI/pages/authorization/login.page";
import { ContactPage } from "UI/pages/contacts/contact.page";
import { DashboardPage } from "UI/pages/overview/dashboard.page";

export class Application extends BaseComponent {
	readonly loginPage = new LoginPage(this.page);
	readonly dashboardPage = new DashboardPage(this.page);
	readonly postOtherFilesPage = new PostOtherFilesPage(this.page);
	readonly contactsPage = new ContactPage(this.page);
}