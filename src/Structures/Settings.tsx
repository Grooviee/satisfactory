import {SettingsData} from "./SettingsData";
import {onSave} from "../Events/OnSave";

export class Settings {
	data: SettingsData = new SettingsData();

	static loadData() {
		return new Settings();
	}

	constructor() {
		this.load();
	}

	save() {
		localStorage.setItem("settings", JSON.stringify(this.data));
		window.dispatchEvent(onSave);
	}

	load() {
		let data = localStorage.getItem("settings");
		if (data == null) return;

		let parsed = JSON.parse(data);
		if (parsed == null) return;
		this.data = new SettingsData(parsed);
	}

	import(data: string): void {
		localStorage.setItem("settings", data);
		this.load();
	}

	reset(): void {
		localStorage.setItem("settings", JSON.stringify({}));
		this.load();
	}

	getData(): SettingsData {
		return this.data;
	}
}

export const SettingsManager = Settings.loadData();
