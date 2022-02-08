import {FactoryData} from "../../../Structures/FactoryData";
import {BuildingData} from "../../../Structures/BuildingData";

export type BuildingCardProps = {
	factory: FactoryData;
	building: BuildingData;
	onRemoveBuilding: (building: BuildingData) => void;
	onBuildingUpdate: (building: BuildingData) => void;
}
