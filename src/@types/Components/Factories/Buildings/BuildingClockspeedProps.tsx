import {BuildingData} from "../../../../Structures/BuildingData";

export type BuildingClockspeedProps = {
	building: BuildingData;
	onBuildingUpdate: (building: BuildingData) => void;
};
