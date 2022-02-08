import {DataList} from "../Data/DataList";
import {Resource} from "./Resource";
import {Resources} from "../@types/Data/Recipes/Resources";
import {BuildingDef} from "../@types/Data/BuildingDef";

/**
 * Data about building.
 */
export class BuildingData {
	/**
	 * Identification of building.
	 */
	id: number;

	/**
	 * Amount of building duplicates.
	 */
	amount: number = 1;

	/**
	 * Identification of building type.
	 */
	type: string;

	/**
	 * Identification of recipe.
	 */
	recipe: string;

	/**
	 * Any possible specials for this building.
	 */
	specials: any;

	/**
	 * Clock speed of building.
	 */
	clockspeed: number = 100;

	constructor(data: any) {
		this.id = data.id;
		this.amount = data.amount;
		this.type = data.type;
		this.recipe = data.recipe;
		this.specials = data.specials;
		this.clockspeed = data.clockspeed;
	}

	hasBuildingType(): boolean {
		return this.type != null;
	}

	isBuildingSet(): boolean {
		if (this.isBuildingSpecial()) {
			return true;
		}

		switch (this.getBuildingType()) {
			case "geothermalGenerator":
			case "coalGenerator":
				if (typeof this.specials === "undefined") {
					return false;
				}

				return this.specials != null && this.specials !== "";
			default:
				if (typeof this.recipe === "undefined") {
					return false;
				}

				return this.recipe != null && this.recipe !== "";
		}
	}

	isBuildingSpecial(): boolean {
		return this.getBuildingType() === "special";
	}

	getBuildingDef(): BuildingDef {
		return DataList.getBuilding(this.type);
	}

	getBuildingType(): string {
		return DataList.getBuilding(this.type).type;
	}

	setBuilding(value: string): void {
		this.type = value;
		let buildingType = DataList.getBuilding(value);

		switch (buildingType.type) {
			case "miner":
			case "geothermalGenerator":
			case "resourceWellExtractor":
				this.specials = 1;
				break;
			case "oilExtractor":
				this.specials = 1;
				this.recipe = "crudeOil";
				break;
			case "waterExtractor":
				this.recipe = "water";
				break;
			case "coalGenerator":
				this.specials = "coalPower";
				break;
			default:
				break;
		}
	}

	getRecipe(): string {
		switch (this.getBuildingType()) {
			case "coalGenerator":
				return this.specials;
			default:
				return this.recipe;
		}
	}

	hasProductions(): boolean {
		try {
			let buildingType = this.getBuildingDef();
			switch (buildingType.type) {
				case "coalGenerator":
					return false;
				default:
					return this.recipe != null;
			}
		} catch (e) {
			return false;
		}
	}

	hasConsumptions(): boolean {
		try {
			let buildingType = this.getBuildingDef();
			switch (buildingType.type) {
				case "coalGenerator":
					return true;
				default:
					if (this.recipe == null) return false;
					let recipe = DataList.getRecipe(this.recipe);

					return recipe == null ? false : recipe.hasOwnProperty("ingredients");
			}
		} catch (e) {
			return false;
		}
	}

	private calculateValuePerMin(baseValue: number): number {
		let valuePerMin = this.clockspeed / 100 * (baseValue * this.amount);

		switch (this.getBuildingType()) {
			case "miner":
			case "oilExtractor":
			case "resourceWellExtractor":
				let buildingDef = this.getBuildingDef();
				if (!buildingDef.level) break;

				valuePerMin *= buildingDef.level * parseFloat(this.specials);
				break;
			default:
				break;
		}

		return valuePerMin;
	}

	private getResources(resources: Resources, sign: string): Resource[] {
		let resourceArray: Resource[] = [];

		for (const [indexName, baseValue] of Object.entries<number>(resources)) {
			resourceArray.push(new Resource(indexName, this.calculateValuePerMin(baseValue), "/ min", sign));
		}

		return resourceArray;
	}

	getProductions(): Resource[] {
		try {
			let recipe = DataList.getRecipe(this.recipe);
			let products = recipe.products;
			if (typeof products === "undefined") return [];

			return this.getResources(products, "+");
		} catch (e) {
			return [];
		}
	}

	getConsumptions(): Resource[] {
		try {
			let recipe = DataList.getRecipe(this.getBuildingDef().type === "coalGenerator" ? this.specials : this.recipe);
			if (recipe == null) return [];

			let ingredients = recipe.ingredients;
			if (typeof ingredients === "undefined") return [];
			return this.getResources(ingredients, "-");
		} catch (e) {
			return [];
		}
	}

	getPowerGenerate(): number {
		try {
			let building = DataList.getBuilding(this.type);

			if (building == null) return 0;
			let generate = building.powerGenerate;
			switch (this.getBuildingType()) {
				case "geothermalGenerator":
					generate *= this.specials;
					break;
			}

			return generate * this.amount;
		} catch (e) {
			return 0;
		}
	}

	getPowerUsage(): number {
		try {
			let building = DataList.getBuilding(this.type);
			if (building == null) return 0;

			return (building.powerUsage * Math.pow(this.clockspeed / 100, 1.6)) * this.amount;
		} catch (e) {
			return 0;
		}
	}

	isPowerGenerator(): boolean {
		return this.getPowerGenerate() > 0;
	}

	static BuildingSorter(a: BuildingData, b: BuildingData): number {
		let aOrder: number;
		let bOrder: number;

		try {
			aOrder = a.getBuildingDef().buildingOrder;
		} catch (e) {
			return 1;
		}

		try {
			bOrder = b.getBuildingDef().buildingOrder;
		} catch (e) {
			return 0;
		}

		if (aOrder < bOrder) {
			return -1;
		}

		if (aOrder > bOrder) {
			return 1;
		}

		return 0;
	}
}
