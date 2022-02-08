import {TransportData} from "./TransportData";
import {Resource} from "./Resource";
import {onSave} from "../Events/OnSave";

export class Transportation {
	transports: TransportData[] = [];

	static load() {
		return new Transportation();
	}

	constructor() {
		this.load();
	}

	private getNewId(): number {
		let length = this.transports.length;
		if (length === 0) {
			return 1;
		} else {
			return this.transports[length - 1].id + 1;
		}
	}

	toArray(): TransportData[] {
		return this.transports;
	}

	save(): void {
		localStorage.setItem("transportation", JSON.stringify(this.transports));
		window.dispatchEvent(onSave);
	}

	load(): void {
		let data: string | null = localStorage.getItem("transportation");
		if (data == null) return;

		let transports = JSON.parse(data);
		if (transports != null) {
			this.transports = Object.values(transports).map((transport) => new TransportData(transport));
		}
	}

	import(data: string): void {
		localStorage.setItem("transportation", data);
		this.load();
	}

	reset(): void {
		localStorage.setItem("transportation", JSON.stringify({}));
		this.load();
	}

	update(data: TransportData) {
		for (let i = 0; i < this.transports.length; i++) {
			let item = this.transports[i];
			if (item.id !== data.id) continue;

			this.transports[i] = data;
		}

		this.save();
	}

	remove(id: number) {
		for (let i = 0; i < this.transports.length; i++) {
			let item = this.transports[i];
			if (item.id !== id) continue;

			this.transports.splice(i, 1);
		}
	}

	removeForFactory(factoryId: number) {
		let removeIds = [];

		for (let i = 0; i < this.transports.length; i++) {
			let data = this.transports[i];
			if (data.fromFactoryId === factoryId || data.toFactoryId === factoryId) {
				removeIds.push(data.id);
			}
		}

		removeIds.forEach((id) => {
			this.remove(id);
		})
	}

	getFactoryExports(id: number): TransportData[] {
		let tran: TransportData[] = [];

		this.transports.forEach(transport => {
			if (transport.fromFactoryId !== id) return;

			tran.push(transport);
		});

		return tran;
	}

	getFactoryImports(id: number): TransportData[] {
		let transportData: TransportData[] = [];

		this.transports.forEach(transport => {
			if (transport.toFactoryId !== id) return;

			transportData.push(transport);
		});

		return transportData;
	}

	add(from: number, to: number, resource: Resource): void {
		this.transports.push(new TransportData({
			id: this.getNewId(),
			fromFactoryId: from,
			toFactoryId: to,
			resource: resource
		}));

		this.save();
	}
}

export const TransportManager = Transportation.load();
