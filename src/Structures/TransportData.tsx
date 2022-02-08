import {Resource} from "./Resource";

export class TransportData {
	id: number;
	fromFactoryId: number;
	toFactoryId: number;
	resource: Resource;

	constructor(data: any) {
		this.id = data.id;
		this.fromFactoryId = data.fromFactoryId;
		this.toFactoryId = data.toFactoryId;
		this.resource = new Resource(
			data.resource.indexName,
			data.resource.value,
			data.resource.units,
			data.resource.sign
		);
	}
}
