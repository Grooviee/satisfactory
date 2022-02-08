import {Factories} from "../../../Structures/Factories";
import {FactoryData} from "../../../Structures/FactoryData";

export type FactoryManagementState = {
	factories: Factories;
	selectedFactory: FactoryData | null;
}
