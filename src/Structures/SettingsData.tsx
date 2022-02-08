export class SettingsData {
	hideDetails: boolean = false;

	constructor(data?: any) {
		if (typeof data === "undefined") return;

		this.hideDetails = data.hideDetails;
	}
}
