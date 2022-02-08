import {BuildingData} from "../../../../Structures/BuildingData";

export type MinerPurityProps = {
	building: BuildingData;
	onBuildingChange: (building: BuildingData) => void;
}
