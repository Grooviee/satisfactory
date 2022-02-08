import {Component} from "react";
import {FactoryManager} from "../../Structures/Factories";
import {Export} from "../Export";
import {Import} from "../Import";
import {FactoryCard} from "./FactoryCard";
import {FactoryManagementState} from "../../@types/Components/Factories/FactoryManagementState";
import {FactoryData} from "../../Structures/FactoryData";
import {FactoryEditor} from "./FactoryEditor";
import {Reset} from "../Reset";
import {SettingsManager} from "../../Structures/Settings";

/**
 * List of defined factory groups.
 */
export class FactoryManagement extends Component<any, FactoryManagementState> {
	constructor(props: any) {
		super(props);

		this.state = {
			factories: FactoryManager,
			selectedFactory: null
		}

		this.handleAddFactory = this.handleAddFactory.bind(this);
		this.handleRemoveFactory = this.handleRemoveFactory.bind(this);
		this.handleSelectFactory = this.handleSelectFactory.bind(this);
		this.handleCloseEditor = this.handleCloseEditor.bind(this);
		this.handleToggleDetails = this.handleToggleDetails.bind(this);
	}

	handleAddFactory(): void {
		let factories = this.state.factories;
		factories.add();

		this.setState({factories: factories});
	}

	handleRemoveFactory(id: number): void {
		let factories = this.state.factories;
		factories.remove(id);
		this.setState({factories: factories});
	}

	handleSelectFactory(factory: FactoryData): void {
		this.setState({
			selectedFactory: factory
		});
	}

	handleCloseEditor(): void {
		this.setState({
			selectedFactory: null
		});
	}

	handleToggleDetails(): void {
		SettingsManager.getData().hideDetails = !SettingsManager.getData().hideDetails;
		this.forceUpdate();
	}

	private addFactoryButton(): JSX.Element {
		return (
			<button className="btn btn-sm btn-primary" onClick={this.handleAddFactory}>
				<i className="fa fa-plus pe-2"/>
				New factory group
			</button>
		);
	}

	private hideDetailsButton(): JSX.Element {
		let hide = SettingsManager.getData().hideDetails;
		let label = hide ? "Show" : "Hide";
		let icon = hide ? <i className="fa fa-eye pe-2"/> : <i className="fa fa-eye-slash pe-2"/>;

		return (
			<button className="btn btn-sm btn-secondary ms-2" onClick={this.handleToggleDetails}>
				{icon}
				{label} details
			</button>
		);
	}

	private factoryList(): JSX.Element {
		let list: JSX.Element[] = [];

		if (this.state.factories != null) {
			list = this.state.factories.toArray().map((factory) => {
				return (
					<FactoryCard
						factory={factory}
						key={factory.id}
						onRemoveBuilding={this.handleRemoveFactory}
						onSelectFactory={this.handleSelectFactory}/>
				);
			});
		}

		return (
			<div className="row row-cols-2">
				{list}
			</div>
		);
	}

	private factoryDetails(): JSX.Element {
		let factory = this.state.selectedFactory;
		if (factory == null) return <></>;

		return (
			<>
				<FactoryEditor factory={factory} onCloseEditor={this.handleCloseEditor} backdrop={true}/>
			</>
		);
	}

	render(): JSX.Element {
		return (
			<>
				<div className="d-flex justify-content-between mb-3">
					<div>
						{this.addFactoryButton()}
						{this.hideDetailsButton()}
					</div>
					<div>
						<Export/>
						<Import/>
						<Reset/>
					</div>
				</div>
				{this.factoryDetails()}
				{this.factoryList()}
				<div className="mt-3">
					{this.addFactoryButton()}
					{this.hideDetailsButton()}
				</div>
			</>
		);
	}
}
