import {FactoryManager} from "../../Structures/Factories";
import {DataList} from "../../Data/DataList";
import {Component} from "react";
import {BuildingData} from "../../Structures/BuildingData";
import {ProductionDataList} from "../../@types/Components/Statistics/ProductionDataList";

/**
 * Component showing data about production.
 */
export class ProductionStatistics extends Component<any, any> {
	constructor(props: any) {
		super(props);

		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate(): void {
		this.forceUpdate();
	}

	componentDidMount(): void {
		window.addEventListener("onSave", this.handleUpdate);
	}

	componentWillUnmount(): void {
		window.removeEventListener("onSave", this.handleUpdate);
	}

	buildProductionData(): ProductionDataList {
		let products: ProductionDataList = {};
		let sorted = FactoryManager.getBuildings().sort(BuildingData.BuildingSorter);

		sorted.forEach(building => {
			if(!building.hasBuildingType()) return;

			if (building.hasProductions()) {
				let productions = building.getProductions();
				productions.forEach(data => {
					let product = products[data.indexName] != null ? products[data.indexName] : {
						id: data.indexName,
						name: DataList.getRecipe(data.indexName).name,
						production: 0,
						consumption: 0,
						net: 0,
						rate: 0
					};

					product.production += data.value;
					products[data.indexName] = product;
				});
			}

			if (building.hasConsumptions()) {
				let consumptions = building.getConsumptions();
				consumptions.forEach(data => {
					let product = products[data.indexName] != null ? products[data.indexName] : {
						id: data.indexName,
						name: DataList.getRecipe(data.indexName).name,
						production: 0,
						consumption: 0,
						net: 0,
						rate: 0
					};

					product.consumption += data.value;

					products[data.indexName] = product;
				})
			}
		});

		return products;
	}


	render(): JSX.Element {
		let data = this.buildProductionData();
		let rows: any = [];

		let i = 0;
		Object.values(data).forEach(rowData => {
			let img = "img/" + DataList.getRecipeIconName(rowData.id) + ".png";
			let progress = "bg-primary";
			if (rowData.rate > 100) {
				progress = "bg-danger";
			}

			if (rowData.rate === 100) {
				progress = "bg-success";
			}

			progress += " progress-bar";

			let netValue = rowData.production - rowData.consumption;
			let net = (Math.round(netValue * 100) / 100).toFixed(2);
			let production = (Math.round(rowData.production * 100) / 100).toFixed(2);
			let consumption = (Math.round(rowData.consumption * 100) / 100).toFixed(2);
			let rateValue = rowData.consumption / rowData.production * 100;

			rows.push(
				<tr key={i++}>
					<td className="align-middle">
						<img src={img} alt={rowData.name} height={16}/>
					</td>
					<td><strong>{rowData.name}</strong></td>
					<td className="text-end">
						{rowData.production === 0
							? ("0 / min")
							: (<span>{production} / min</span>)}
					</td>
					<td className="text-end">
						{rowData.consumption === 0
							? ("0 / min")
							: (<span className="text-danger">- {consumption} / min</span>)}
					</td>
					<td className="text-end bold pe-5">
						{netValue > 0 ? (<span className="text-success">{net} / min</span>) : ""}
						{netValue < 0 ? (<span className="text-danger">{net} / min</span>) : ""}
						{netValue === 0 ? ("0 / min") : ""}

					</td>
					<td>
						<div className="progress rate-progress">
							<div className={progress} style={{width: rateValue + "%"}}>

							</div>
						</div>
						<small className="text-muted">
							<em>{(Math.round(rateValue * 100) / 100).toFixed(2)} %</em>
						</small>
					</td>
				</tr>
			);
		});

		return (
			<div className="card border-dark mb-3">
				<h5 className="card-header bg-dark border-dark">
					Production Statistics
				</h5>
				<div className="production-statistics scrollable">
					<table className="table text-small border-dark">
						<thead>
						<tr>
							<th className="border-dark">&nbsp;</th>
							<th className="border-dark">Name</th>
							<th className="text-end border-dark">Production</th>
							<th className="text-end border-dark">Consumption</th>
							<th className="text-end pe-5 border-dark">Net</th>
							<th className="border-dark">Rate</th>
						</tr>
						</thead>
						<tbody>
						{rows}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
