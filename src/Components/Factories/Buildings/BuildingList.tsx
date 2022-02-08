import {Component} from "react";
import {BuildingListProps} from "../../../@types/Components/Factories/BuildingListProps";
import {BuildingData} from "../../../Structures/BuildingData";
import {DataList} from "../../../Data/DataList";
import {BuildingListState} from "../../../@types/Components/Factories/BuildingListState";
import {BuildingCard} from "./BuildingCard";
import {AddBuildingModal} from "./AddBuildingModal";

/**
 * Component showing list of buildings
 */
export class BuildingList extends Component<BuildingListProps, BuildingListState> {
	constructor(props: BuildingListProps) {
		super(props);

		this.state = {
			buildingId: 0
		};

		this.handleSelectBuilding = this.handleSelectBuilding.bind(this);
		this.handleRemoveBuilding = this.handleRemoveBuilding.bind(this);
		this.handleBuildingUpdate = this.handleBuildingUpdate.bind(this);
	}

	handleSelectBuilding(id: number): void {
		this.setState({
			buildingId: id
		});
	}

	handleBuildingUpdate(building: BuildingData): void {
		this.setState({
			buildingId: building.id
		});
	}

	handleRemoveBuilding(building: BuildingData): void {
		this.props.factory.removeBuilding(building.id);

		this.setState({
			buildingId: 0
		});
	}

	private getBuilding(): BuildingData | null {
		for (let i = 0; i < this.props.factory.buildings.length; i++) {
			let building = this.props.factory.buildings[i];
			if (building.id === this.state.buildingId) {
				return building;
			}
		}

		return null;
	}

	private renderList(): JSX.Element {
		let buildings = this.props.factory.buildings.sort(BuildingData.BuildingSorter);
		let list = buildings.map((building) => {
			let className = "list-group-item list-group-item-action";
			if (this.state.buildingId === building.id) {
				className += " active"
			}

			let recipeName = <></>;
			try {
				recipeName = <>{DataList.getRecipe(building.getRecipe()).name}</>;
			} catch (e) {
				if(building.getBuildingType() !== "special") {
					recipeName = <em>Not set</em>;
				}
			}

			return (
				<button className={className}
				        key={building.id}
				        onClick={() => {
					        this.handleSelectBuilding(building.id)
				        }}>
					<div className="d-flex w-100 justify-content-between">
						<div className="flex-fill">
							{DataList.getBuildingIcon(building.type, 64, "pe-3 float-start")}
							<span className="fw-bold fs-6">{building.getBuildingName()}</span>
							<div>
								{DataList.getRecipeIcon(building.getRecipe())}
								{recipeName}
							</div>
						</div>
						<div className="d-flex align-items-center">
							<span className="badge bg-light rounded-pill fs-6 text-dark">
								{building.amount} x
							</span>
						</div>
					</div>
				</button>
			);
		});

		return (
			<div className="list-group">
				{list}
			</div>
		);
	}

	render(): JSX.Element {
		let building = this.getBuilding();
		let buildingCard = <></>;
		if (building != null) {
			buildingCard = <BuildingCard
				key={building.id}
				factory={this.props.factory}
				building={building}
				onRemoveBuilding={this.handleRemoveBuilding}
				onBuildingUpdate={this.handleBuildingUpdate}/>
		}

		return (
			<>
				<div className="row h-100">
					<div className="col-4">
						<AddBuildingModal onUpdate={this.handleBuildingUpdate} factory={this.props.factory}>
							New building
						</AddBuildingModal>

						<div className="building-list scrollable">
							{this.renderList()}
						</div>
					</div>
					<div className="col-8 h-100">
						{buildingCard}
					</div>
				</div>
			</>
		);
	}
}
