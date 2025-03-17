import { overview } from "data/urls/webUrls";
import { BaseApplicationPage } from "UI/pages/baseApplication.page";

export class DashboardPage extends BaseApplicationPage {
	readonly url = overview.dashboard;
}