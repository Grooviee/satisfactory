import {DataList} from "../../Data/DataList";
import {Component} from "react";
import {BuildingData} from "../../Structures/BuildingData";
import {FactoryData} from "../../Structures/FactoryData";
import {BuildingDetails} from "./Buildings/BuildingDetails";
import {Select2} from "../Wrappers/Select2";
import {ResourceOverview} from "./Buildings/ResourceOverview";
import {BuildingPower} from "./Buildings/BuildingPower";
import {BuildingCardProps} from "../../@types/Components/Factories/BuildingCardProps";
import {BuildingCardState} from "../../@types/Components/Factories/BuildingCardState";
import {DataState} from "../../@types/Components/Wrappers/DataState";
import {TemplateResult} from "../../@types/Components/Wrappers/TemplateResult";

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
		this.handleSetRecipe = this.handleSetRecipe.bind(this);
		this.handleBuildingUpdate = this.handleBuildingUpdate.bind(this);
		this.handleIncreaseAmount = this.handleIncreaseAmount.bind(this);
		this.handleDecreaseAmount = this.handleDecreaseAmount.bind(this);
		this.handleSetAmount = this.handleSetAmount.bind(this);
		this.handleSetClockSpeed = this.handleSetClockSpeed.bind(this);
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
		this.factory.updateBuilding(building);
		this.setState({building: building});
	}

	/**
	 * Set selected recipe to a building.
	 * @param value
	 */
	handleSetRecipe(value: string): void {
		if (parseInt(value) === 0) return;

		let building = this.state.building;
		building.recipe = value;
		this.factory.updateBuilding(building);
		this.setState({building: building});
	}

	/**
	 * Handle building updating.
	 * @param building
	 */
	handleBuildingUpdate(building: BuildingData): void {
		this.factory.updateBuilding(building);
		this.setState({building: building});
	}

	/**
	 * Increase amount of buildings.
	 */
	handleIncreaseAmount(): void {
		let building = this.state.building;

		building.amount++;
		this.factory.updateBuilding(building);
		this.setState({building: building});
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

		this.factory.updateBuilding(building);
		this.setState({building: building});
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
		this.factory.updateBuilding(building);
		this.setState({building: building});
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
	 * Set building clock speed.
	 * @param event
	 */
	handleSetClockSpeed(event: any): void {
		let inputValue: string = event.target.value;
		if(inputValue.endsWith(".")) {
			inputValue += "1"
		}

		let value = parseFloat(inputValue);
		if (isNaN(value)) {
			value = 0;
		}

		if (value < 0) {
			value = 0;
		}

		if (value > 250) {
			value = 250;
		}

		let building = this.state.building;
		building.clockspeed = value;
		this.factory.updateBuilding(building);
		this.setState({building: building});
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

	buildingDetails(): JSX.Element {
		let img = "img/" + this.state.building.type + ".png";
		let clockSpeed = this.state.building.getBuildingDef().type === "special" ? "" : (
			<div className="input-group building-amount">
				<input type="text" className="form-control form-control-sm"
				       value={this.state.building.clockspeed}
				       onChange={this.handleSetClockSpeed}/>
				<span className="input-group-text">
					<i className="fa fa-percent fa-xs"/>
				</span>
			</div>
		);

		return (
			<div className="d-flex flex-column h-100 justify-content-between">
				<div className="card-body">
					<div className="row mb-3">
						<div className="col-6 d-flex justify-content-center">
							<img src={img} className="pe-3" alt={this.state.building.type} height={100}/>
						</div>
						<div className="col-6">
							<table className="table w-100 my-0">
								<tbody>
								<tr>
									<td className="border-0">
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
									</td>
								</tr>
								<tr>
									<td className="border-0">
										<div className="d-flex justify-content-end">
											{clockSpeed}
										</div>
									</td>
								</tr>
								<tr>
									<td className="border-0">
										<BuildingPower building={this.state.building}/>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>

					<BuildingDetails building={this.state.building} onBuildingChange={this.handleBuildingUpdate}/>
				</div>
				<div className="card-footer border-0 bg-transparent">
					<div className="row">
						<ResourceOverview
							resources={this.state.building.getConsumptions()}
							has={this.state.building.hasConsumptions()}
							title="Consumptions"
							formatting="bold text-danger"/>
						<ResourceOverview
							resources={this.state.building.getProductions()}
							has={this.state.building.hasProductions()}
							title="Productions"
							formatting="bold text-success"/>
					</div>
				</div>
			</div>
		)
	}

	render(): JSX.Element {
		let body = this.state.building.type == null ? "" : (
			this.buildingDetails()
		);

		let border = this.state.building.isBuildingSet() ? "border-dark" : "border-success";
		let bg = this.state.building.isBuildingSet() ? "bg-dark" : "bg-success";

		let cardClass = "card h-100 "+border;
		let cardHeaderClass = "card-header d-flex justify-content-between "+border+" "+bg;

		return (
			<div className="col my-3">
				<div className={cardClass}>
					<div className={cardHeaderClass}>
						<div className="flex-fill pe-3">
							{this.selectBuilding()}
						</div>

						<button className="btn btn-sm btn-outline-danger" onClick={this.onRemoveBuilding}>
							<i className="fa fa-times"/>
						</button>
					</div>
					{body}
				</div>
			</div>
		);
	}
}
