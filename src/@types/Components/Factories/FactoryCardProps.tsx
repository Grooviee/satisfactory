import {FactoryData} from "../../../Structures/FactoryData";

export type FactoryCardProps = {
	factory: FactoryData;
	onRemoveBuilding: (id: number) => void;
	onSelectFactory: (factory: FactoryData) => void;
};
