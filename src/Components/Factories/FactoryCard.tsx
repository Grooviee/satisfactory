import {FactoryManager} from "../../Structures/Factories";
import {BuildingCard} from "./BuildingCard";
import {Component} from "react";
import {FactoryData} from "../../Structures/FactoryData";
import {FactoryOverview} from "./FactoryOverview";
import {BuildingData} from "../../Structures/BuildingData";
import {AddTransportationModal} from "../Transportation/AddTransportationModal";
import {AddBuildingModal} from "./Buildings/AddBuildingModal";
import {FactoryCardState} from "../../@types/Components/Factories/FactoryCardState";

/**
 * Card with factory details.
 */
export class FactoryCard extends Component<any, FactoryCardState> {
	data: FactoryData;
	onDelete: any;
	onAddBuilding: any;

	constructor(props: any) {
		super(props);

		this.data = props.data;
		this.onDelete = props.onDelete;
		this.onAddBuilding = props.onAddBuilding;

		this.state = {
			data: this.data,
			opened: false
		};

		this.handleChangeFactoryName = this.handleChangeFactoryName.bind(this);
		this.handleAddBuilding = this.handleAddBuilding.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleSort = this.handleSort.bind(this);
		this.handleUpdateTransport = this.handleUpdateTransport.bind(this);
	}

	/**
	 * Change of factory name.
	 * @param event
	 */
	handleChangeFactoryName(event: any): void {
		this.data.name = event.target.value;
		FactoryManager.update(this.data);
		this.setState({data: this.data});
	}

	/**
	 * Toggle factory details.
	 */
	handleToggle(): void {
		this.setState((state: FactoryCardState) => ({
			opened: !state.opened
		}));
	}

	/**
	 * Handle adding of new building to factory.
	 */
	handleAddBuilding(): void {
		this.setState(_ => ({
			opened: true
		}));
	}

	handleSort(): void {
		this.forceUpdate();
	}

	handleUpdateTransport(): void {
		this.setState(_ => ({
			opened: false
		}));
	}

	/**
	 * Handle removing of selected building.
	 * @param id of building to remove.
	 */
	handleRemoveBuilding(id: number): void {
		this.data.removeBuilding(id);
		FactoryManager.update(this.data);
		this.setState({data: this.data});
	}

	cardBody(): JSX.Element {
		let buildings = this.data.buildings.sort(BuildingData.BuildingSorter);

		let buildingList = buildings.map((building) => {
			return <BuildingCard key={building.id}
			                     factory={this.data}
			                     building={building}
			                     onRemoveBuilding={(_: any) => this.handleRemoveBuilding(building.id)}/>
		});

		return (
			<>
				<div className="card-body">
					<div className="row row-cols-3">
						{buildingList}
					</div>
				</div>
				<div className="card-footer border-dark d-flex justify-content-end bg-transparent">
					<button className="btn btn-sm btn-outline-primary mx-2" onClick={this.handleSort}>
						<i className="fa fa-sort-amount-down-alt pe-2"/> Sort buildings
					</button>
					<AddBuildingModal factory={this.data} onUpdate={this.handleAddBuilding} />
				</div>
			</>
		);
	}

	render(): JSX.Element {
		return (
			<>
				<div className="card border-dark my-3">
					<div className="card-header border-dark bg-dark d-flex justify-content-between">
						<div>
							<button className="btn btn-sm me-3" onClick={this.handleToggle}>
								{this.state.opened
									? (<i className="fa fa-chevron-up"/>)
									: (<i className="fa fa-chevron-down"/>)}
							</button>
						</div>
						<div className="flex-fill">
							<input type="text" className="form-control form-control-sm" value={this.data.name}
							       onChange={this.handleChangeFactoryName}/>
						</div>
						<div className="ps-5">
							<AddBuildingModal factory={this.data} onUpdate={this.handleAddBuilding} />
							<AddTransportationModal onUpdate={this.handleUpdateTransport} fromFactory={this.data.id}/>
							<button className="btn btn-sm btn-outline-danger" onClick={this.onDelete}>
								<i className="fa fa-times"/>
							</button>
						</div>
					</div>
					<FactoryOverview factory={this.data}/>
					{this.state.opened ? this.cardBody() : (<></>)}
				</div>
			</>
		)
	}
}
