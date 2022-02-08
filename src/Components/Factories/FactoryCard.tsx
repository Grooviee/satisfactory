import {ChangeEvent, Component} from "react";
import {FactoryCardProps} from "../../@types/Components/Factories/FactoryCardProps";
import {FactoryCardState} from "../../@types/Components/Factories/FactoryCardState";
import {FactoryBuildings} from "./Overview/FactoryBuildings";
import {FactoryManager} from "../../Structures/Factories";
import {EnergyOverview} from "./Overview/EnergyOverview";
import {AddTransportationModal} from "../Transportation/AddTransportationModal";
import {ResourceData} from "./Overview/ResourceData";
import {FactoryData} from "../../Structures/FactoryData";
import {SettingsManager} from "../../Structures/Settings";
import {TransportOverview} from "../Transportation/TransportOverview";

/**
 * Factory details.
 */
export class FactoryCard extends Component<FactoryCardProps, FactoryCardState> {
	constructor(props: FactoryCardProps) {
		super(props);

		this.state = {
			opened: false,
			factory: props.factory
		};

		this.handleFactoryName = this.handleFactoryName.bind(this);
		this.handleFactoryDelete = this.handleFactoryDelete.bind(this);
		this.handleEditFactory = this.handleEditFactory.bind(this);
		this.handleRefresh = this.handleRefresh.bind(this);
	}

	handleFactoryName(event: ChangeEvent<HTMLInputElement>): void {
		let factory = this.state.factory;
		factory.name = event.target.value;
		FactoryManager.update(factory);
		this.setState({factory: factory});
	}

	handleFactoryDelete(): void {
		this.props.onRemoveBuilding(this.state.factory.id);
	}

	handleEditFactory(): void {
		this.props.onSelectFactory(this.state.factory);
	}

	handleRefresh(): void {
		this.forceUpdate();
	}

	editButton(): JSX.Element {
		return (
			<button className="btn btn-sm btn-primary me-3" onClick={this.handleEditFactory}>
				<i className="fa fa-edit"/> Edit factory
			</button>
		);
	}

	private cardBody(): JSX.Element {
		let hidden = SettingsManager.getData().hideDetails;
		if (hidden) return <></>;

		return (
			<div className="card-body">
				<div className="row row-cols-2 mb-4">
					<div className="col">
						<FactoryBuildings factory={this.state.factory}/>
					</div>
					<div className="col">
						<EnergyOverview factory={this.state.factory}/>
					</div>
				</div>
				<div className="row row-cols-2">
					<div className="col">
						<ResourceData factory={this.state.factory} renderCallback={FactoryData.productionFilter}>
							Final production
						</ResourceData>
					</div>
					<div className="col">
						<ResourceData factory={this.state.factory} renderCallback={FactoryData.insufficientFilter}>
							Insufficient resources
						</ResourceData>
					</div>
				</div>
			</div>
		);
	}

	private cardFooter(): JSX.Element {
		let hidden = SettingsManager.getData().hideDetails;
		if (hidden) return <></>;

		return (
			<div className="card-footer bg-transparent border-top-0">
				<div className="row">
					<div className="col-12">
						<TransportOverview factory={this.state.factory}>
							Transportation
						</TransportOverview>
					</div>
				</div>
			</div>
		)
	}

	render(): JSX.Element {
		return (
			<div className="col mb-4">
				<div className="card h-100" id={this.state.factory.id.toString()}>
					<div className="card-header d-flex justify-content-between bg-dark">
						<div className="flex-fill">
							<input type="text" className="form-control form-control-sm"
							       value={this.state.factory.name} onChange={this.handleFactoryName}/>
						</div>
						<div className="ps-3">
							{this.editButton()}
							<AddTransportationModal onUpdate={this.handleRefresh} fromFactory={this.state.factory.id}/>
							<button className="btn btn-sm btn-outline-danger" onClick={this.handleFactoryDelete}>
								<i className="fa fa-times"/>
							</button>
						</div>
					</div>
					{this.cardBody()}
					{this.cardFooter()}
				</div>
			</div>
		);
	}
}
