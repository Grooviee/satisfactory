import {FactoryData} from "../../../../Structures/FactoryData";

export type ResourceDataProps = {
	factory: FactoryData;
	renderCallback: (value: number) => boolean;
}
