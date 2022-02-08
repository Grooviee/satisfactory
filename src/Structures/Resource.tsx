import {DataList} from "../Data/DataList";
import {numberFormat} from "../Helpers/NumberFormat";

export class Resource {
	indexName: string;
	value: number;
	units: string;
	sign: string;

	constructor(indexName: string, value: number, units: string, sign: string) {
		this.indexName = indexName;
		this.value = value;
		this.units = units;
		this.sign = sign;
	}

	getFormatted(): JSX.Element {
		return (
			<span>
				{DataList.getRecipeIcon(this.indexName)}
				{this.sign} {numberFormat(this.value)} {this.units}
			</span>
		);
	}
}
