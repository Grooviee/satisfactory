import {BuildingData} from "../../../../Structures/BuildingData";

export type RecipeSelectProps = {
	building: BuildingData;
	onBuildingChange: (building: BuildingData) => void;
	label: string;
	placeholder: string;
};
