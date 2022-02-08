import {FactoryData} from "./FactoryData";
import {BuildingData} from "./BuildingData";
import {Resource} from "./Resource";
import {TransportManager} from "./Transportation";
import {onSave} from "../Events/OnSave";

export class Factories {
	factories: FactoryData[] = [];

	static load() {
		return new Factories();
	}

	constructor() {
		this.load();
	}

	toArray(): FactoryData[] {
		return this.factories;
	}

	toOptions(emptyValue: boolean = true): JSX.Element[] {
		let optionsList: JSX.Element[] = [];
		if (emptyValue) {
			optionsList.push(<option key={-1}/>);
		}

		this.factories.forEach((factory) => {
			optionsList.push(<option key={factory.id} value={factory.id}>{factory.name}</option>)
		});

		return optionsList;
	}

	getBuildings(): BuildingData[] {
		let buildings: BuildingData[] = [];
		this.factories.forEach(factory => {
			factory.buildings.forEach(building => {
				buildings.push(building);
			})
		})

		return buildings;
	}

	getFactory(id: number): FactoryData | null {
		for (let i = 0; i < this.factories.length; i++) {
			if (this.factories[i].id === id) {
				return this.factories[i];
			}
		}

		return null;
	}

	getFactoryName(id: number): string {
		let factory = this.getFactory(id);
		if (factory == null) return "";

		return factory.name;
	}

	private getNewId(): number {
		let length = this.factories.length;
		if (length === 0) {
			return 1;
		} else {
			let id = 0;
			for (let i = 0; i < this.factories.length; i++) {
				id = Math.max(id, this.factories[i].id);
			}

			return id + 1;
		}
	}

	add(): FactoryData {
		let id = this.getNewId();
		let newFactory = new FactoryData({
			id: id,
			name: "Factory " + id,
			buildings: []
		});
		this.factories.push(newFactory);
		this.save();

		return newFactory;
	}

	update(factory: FactoryData): void {
		for (let i = 0; i < this.factories.length; i++) {
			let item = this.factories[i];
			if (item.id !== factory.id) continue;

			this.factories[i] = factory;
		}
		this.save();
	}

	remove(id: number): void {
		for (let i = 0; i < this.factories.length; i++) {
			let factory = this.factories[i];
			if (factory.id !== id) continue;

			TransportManager.removeForFactory(factory.id);
			this.factories.splice(i, 1);
		}

		TransportManager.save();
		this.save();
	}

	save(): void {
		localStorage.setItem("factories", JSON.stringify(this.factories));
		window.dispatchEvent(onSave);
	}

	load(): void {
		let data: string | null = localStorage.getItem("factories");
		if (data == null) return;
		let factories = JSON.parse(data);
		if (factories != null) {
			this.factories = Object.values(factories).map((factory) => new FactoryData(factory));
		}
	}

	import(data: string): void {
		localStorage.setItem("factories", data);
		this.load();
	}

	reset(): void {
		localStorage.setItem("factories", JSON.stringify({}));
		this.load();
	}

	getTotalPowerConsumption(): number {
		let consumption = 0;
		this.getBuildings().forEach(building => {
			if (!building.hasBuildingType()) return;
			consumption += building.getPowerUsage()
		});

		return consumption;
	}

	getTotalPowerProduction(): number {
		let production = 0;
		this.getBuildings().forEach(building => {
			if (!building.hasBuildingType()) return;
			production += building.getPowerGenerate()
		});

		return production;
	}

	getPowerEfficiency(): number {
		let consumption = this.getTotalPowerConsumption();
		let production = this.getTotalPowerProduction();

		if (production === 0) return consumption === 0 ? 0 : -999;

		return consumption / production * 100;
	}

	getFactoryProductions(id: number): Resource[] {
		let productions: Resource[] = [];
		let factory = this.getFactory(id);
		if (factory === null) return productions;

		factory.getResources().forEach((resource) => {
			productions.push(resource);
		});

		return productions;
	}
}

export const FactoryManager = Factories.load();
