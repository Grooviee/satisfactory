import {BuildingData} from "./BuildingData";
import {FactoryManager} from "./Factories";
import {Resource} from "./Resource";
import {TransportManager} from "./Transportation";

export type BuildingCount = {
	[buildingIndex: string]: number
};

export class FactoryData {
	name: string;
	id: number;
	buildings: BuildingData[];

	constructor(data: any) {
		this.name = data.name;
		this.id = data.id;
		this.buildings = data.buildings.map((building: any) => new BuildingData(building));
	}

	private getNewId(): number {
		let length = this.buildings.length;
		if (length === 0) {
			return 1;
		} else {
			let id = 0;
			for(let i = 0; i < this.buildings.length; i++) {
				id = Math.max(id, this.buildings[i].id);
			}

			return id + 1;
		}
	}

	createBuilding() {
		return new BuildingData({
			amount: 1,
			clockspeed: 100
		});
	}

	addBuilding(): BuildingData {
		let building = new BuildingData({
			id: this.getNewId(),
			amount: 1,
			clockspeed: 100
		});

		this.buildings.push(building);
		return building;
	}

	removeBuilding(id: number): void {
		for (let i = 0; i < this.buildings.length; i++) {
			let building = this.buildings[i];
			if (building.id !== id) continue;

			this.buildings.splice(i, 1);
		}
	}

	updateBuilding(updated: BuildingData): void {
		for (let i = 0; i < this.buildings.length; i++) {
			let building = this.buildings[i];
			if (building.id !== updated.id) continue;

			this.buildings[i] = updated;
		}

		FactoryManager.update(this);
	}

	getPowerUsage(): number {
		let usage = 0;
		this.buildings.forEach((building) => {
			usage += building.getPowerUsage();
		});

		return usage;
	}

	getPowerGenerate(): number {
		let generate = 0;
		this.buildings.forEach((building) => {
			generate += building.getPowerGenerate();
		});

		return generate;
	}

	countBuildings(): BuildingCount {
		let counts: BuildingCount = {};
		let sorted = this.buildings.sort(BuildingData.BuildingSorter);

		sorted.forEach((building) => {
			if (!counts.hasOwnProperty(building.type)) {
				counts[building.type] = building.amount;
			} else {
				counts[building.type] += building.amount;
			}
		});

		return counts;
	}

	getResources(): Resource[] {
		let resources: Resource[] = [];
		let sorted = this.buildings.sort(BuildingData.BuildingSorter);

		sorted.forEach((building) => {
			if (building.hasConsumptions()) {
				building.getConsumptions().forEach((resource) => {
					let found = this.findResource(resources, resource.indexName);
					if (found == null) {
						resources.push(new Resource(
							resource.indexName,
							-resource.value,
							resource.units,
							resource.sign
						));
					} else {
						found.value -= resource.value;
					}
				});
			}

			if (building.hasProductions()) {
				building.getProductions().forEach((resource) => {
					let found = this.findResource(resources, resource.indexName);
					if (found == null) {
						resources.push(resource);
					} else {
						found.value += resource.value;
					}
				})
			}
		});

		TransportManager.getFactoryExports(this.id).forEach((transport) => {
			let resource = transport.resource;
			let found = this.findResource(resources, resource.indexName);
			if (found == null) {
				resources.push(resource);
			} else {
				found.value -= resource.value;
			}
		});

		TransportManager.getFactoryImports(this.id).forEach((transport) => {
			let resource = transport.resource;
			let found = this.findResource(resources, resource.indexName);
			if (found == null) {
				resources.push(resource);
			} else {
				found.value += resource.value;
			}
		})

		return resources;
	}

	private findResource(array: Resource[], indexName: string): Resource | null {
		for (let i = 0; i < array.length; i++) {
			if (array[i].indexName === indexName) {
				return array[i];
			}
		}

		return null;
	}
}
