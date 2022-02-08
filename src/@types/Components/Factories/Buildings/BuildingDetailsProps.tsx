import {BuildingData} from "../../../../Structures/BuildingData";

export type BuildingDetailsProps = {
	building: BuildingData;
	onBuildingChange: (building: BuildingData) => void;
};
