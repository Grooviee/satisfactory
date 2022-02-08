import {FactoryData} from "../../../../Structures/FactoryData";
import {HTMLProps} from "react";
import {BuildingData} from "../../../../Structures/BuildingData";

export type AddBuildingModalProps = HTMLProps<HTMLDivElement> & {
	onUpdate: (building: BuildingData) => void;
	factory: FactoryData;
}
