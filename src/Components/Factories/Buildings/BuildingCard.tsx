import {DataList} from "../../../Data/DataList";
import {Component} from "react";
import {BuildingData} from "../../../Structures/BuildingData";
import {FactoryData} from "../../../Structures/FactoryData";
import {BuildingOptions} from "./Options/BuildingOptions";
import {Select2} from "../../Wrappers/Select2";
import {ResourceOverview} from "./Overview/ResourceOverview";
import {BuildingPower} from "./Overview/BuildingPower";
import {BuildingCardProps} from "../../../@types/Components/Factories/BuildingCardProps";
import {BuildingCardState} from "../../../@types/Components/Factories/BuildingCardState";
import {DataState} from "../../../@types/Components/Wrappers/DataState";
import {TemplateResult} from "../../../@types/Components/Wrappers/TemplateResult";
import {BuildingClockspeed} from "./Options/BuildingClockspeed";

/**
 * Component of building card, showing details about it.
 */
export class BuildingCard extends Component<BuildingCardProps, BuildingCardState> {
	factory: FactoryData;
	onRemoveBuilding: any;

	constructor(props: BuildingCardProps) {
		super(props);

		this.factory = props.factory;
		this.onRemoveBuilding = props.onRemoveBuilding;

		this.state = {
			building: props.building
		}

		this.handleSetBuilding = this.handleSetBuilding.bind(this);
		this.handleRemoveBuilding = this.handleRemoveBuilding.bind(this);
		this.handleBuildingUpdate = this.handleBuildingUpdate.bind(this);
		this.handleIncreaseAmount = this.handleIncreaseAmount.bind(this);
		this.handleDecreaseAmount = this.handleDecreaseAmount.bind(this);
		this.handleSetAmount = this.handleSetAmount.bind(this);
	}

	/**
	 * Set to building its selected type.
	 * @param value
	 */
	handleSetBuilding(value: any): void {
		let building = this.state.building;

		if (building.hasBuildingType()) {
			let id = building.id;

			building = this.factory.createBuilding();
			building.id = id;
		}

		building.setBuilding(value);
		if(this.state.building.getBuildingType() === building.getBuildingType()) {
			let original = this.state.building;
			building.amount = original.amount;
			building.recipe = original.recipe;
			building.specials = original.specials;
		}

		this.handleBuildingUpdate(building);
	}

	/**
	 * Handle building updating.
	 * @param building
	 */
	handleBuildingUpdate(building: BuildingData): void {
		this.factory.updateBuilding(building);
		this.props.onBuildingUpdate(building);
		this.setState({building: building});
	}

	handleRemoveBuilding(): void {
		this.props.onRemoveBuilding(this.props.building);
	}

	/**
	 * Increase amount of buildings.
	 */
	handleIncreaseAmount(): void {
		let building = this.state.building;

		building.amount++;
		this.handleBuildingUpdate(building);
	}

	/**
	 * Decrease amount of buildings.
	 */
	handleDecreaseAmount(): void {
		let building = this.state.building;

		building.amount--;
		if (building.amount === 0) {
			this.onRemoveBuilding();
			return;
		}

		this.handleBuildingUpdate(building);
	}

	/**
	 * Set typed amount of building.
	 * @param event
	 */
	handleSetAmount(event: any): void {
		let building = this.state.building;

		let value = parseInt(event.target.value);
		if (value <= 0) {
			this.onRemoveBuilding();
			return;
		}

		building.amount = value;
		this.handleBuildingUpdate(building);
	}

	setBuildingTemplate(state: DataState): TemplateResult {
		if (!state.id) {
			return state.text;
		}

		return $(
			"<span><img src='img/" + state.id + ".png' alt='' height='24' class='pe-2'>" + state.text + "</span>"
		);
	}



	/**
	 * Selector for building type.
	 * @returns {JSX.Element}
	 */
	selectBuilding(): JSX.Element {
		let options = [];
		options.push(<option key={0}/>);
		for (const [key, value] of Object.entries(DataList.buildings)) {
			options.push(<option key={key} value={key}>{value.name}</option>);
		}

		return (
			<Select2
				className="form-select form-select-sm"
				placeholder="Select building"
				options={options}
				onChange={this.handleSetBuilding}
				defaultValue={this.state.building.type}
				templateResult={this.setBuildingTemplate}/>
		);
	}

	buildingAmount(): JSX.Element {
		return (
			<div className="d-flex justify-content-end">
				<div className="input-group building-amount">
					<button className="btn btn-outline-danger btn-sm"
					        onClick={this.handleDecreaseAmount}>
						<i className="fa fa-minus"/>
					</button>
					<input type="text" className="form-control form-control-sm"
					       value={this.state.building.amount}
					       onChange={this.handleSetAmount}/>
					<button className="btn btn-success btn-sm"
					        onClick={this.handleIncreaseAmount}>
						<i className="fa fa-plus"/>
					</button>
				</div>
			</div>
		);
	}

	render(): JSX.Element {
		let cardClass = "card border-dark h-100";
		let cardHeaderClass = "card-header d-flex justify-content-between border-dark bg-dark";

		return (
			<div className={cardClass}>
				<div className={cardHeaderClass}>
					<div className="flex-fill pe-3">
						{this.selectBuilding()}
					</div>

					<button className="btn btn-sm btn-outline-danger" onClick={this.handleRemoveBuilding}>
						<i className="fa fa-times"/>
					</button>
				</div>
				<div className="card-body">
					<div className="d-flex justify-content-between">
						{DataList.getBuildingIcon(this.state.building.type, 256, "me-3 float-start")}
						<div className="flex-fill">
							<table className="table table-bordered flex-fill">
								<tbody>
								<tr>
									<td className="align-middle" width={150}>Amount</td>
									<td>{this.buildingAmount()}</td>
								</tr>
								<BuildingClockspeed building={this.state.building} onBuildingUpdate={this.handleBuildingUpdate}/>
								<tr>
									<td className="align-middle">Power</td>
									<td>
										<div className="py-1">
											<BuildingPower building={this.state.building}/>
										</div>
									</td>
								</tr>
								<BuildingOptions building={this.state.building}
								                 onBuildingChange={this.handleBuildingUpdate}/>
								</tbody>
							</table>

							<div className="row row-cols-2">
								<ResourceOverview
									resources={this.state.building.getConsumptions()}
									has={this.state.building.hasConsumptions()}
									formatting="bold text-danger">
									Consumes
								</ResourceOverview>
								<ResourceOverview
									resources={this.state.building.getProductions()}
									has={this.state.building.hasProductions()}
									formatting="bold text-success">
									Produces
								</ResourceOverview>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
