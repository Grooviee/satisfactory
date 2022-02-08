import {FactoryCard} from "./FactoryCard";
import {Factories, FactoryManager} from "../../Structures/Factories";
import {Component} from "react";
import {FactoryData} from "../../Structures/FactoryData";
import {Export} from "../Export";
import {Import} from "../Import";
import {TransportManager} from "../../Structures/Transportation";
import {onRefreshApp} from "../../Events/OnRefreshApp";
import {FactoryListState} from "../../@types/Components/Factories/FactoryListState";

/**
 * List of defined factories.
 */
export class FactoryList extends Component<any, FactoryListState> {
	factories: Factories;
	openModal: boolean = false;

	constructor(props: any) {
		super(props);

		this.factories = FactoryManager;
		this.handleAddClick = this.handleAddClick.bind(this);
		this.handleResetData = this.handleResetData.bind(this);
	}

	/**
	 * Handle click on Add Factory button.
	 */
	handleAddClick(): void {
		this.factories.add();
		this.setState({factories: this.factories});
	}

	/**
	 * Handle click on delete button.
	 * @param id of factory to delete.
	 */
	handleDeleteFactory(id: number): void {
		this.factories.remove(id);
		this.setState({factories: this.factories});
	}

	handleResetData(): void {
		FactoryManager.reset();
		TransportManager.reset();
		window.dispatchEvent(onRefreshApp);
	}

	private addFactoryButton(): JSX.Element {
		return (
			<button onClick={this.handleAddClick} className="btn btn-sm btn-primary">
				<i className="fa fa-plus pe-2"/>
				Add Factory
			</button>
		);
	}

	render(): JSX.Element {
		let details: JSX.Element[] = [];

		if (this.factories != null) {
			details = this.factories.toArray().map((factory: FactoryData) => {
				return <FactoryCard key={factory.name} data={factory}
				                    onDelete={(_: any) => {
					                    this.handleDeleteFactory(factory.id)
				                    }}/>
			});
		}

		return (
			<>
				<div className="d-flex justify-content-between mb-3">
					<div>
						{this.addFactoryButton()}
					</div>
					<div>
						<Export/>
						<Import/>
						<button onClick={this.handleResetData} className="btn btn-sm btn-outline-danger ms-2">
							<i className="fa fa-trash"/> Reset factory
						</button>
					</div>
				</div>
				{details}
				<div className="d-flex justify-content-start mb-5">
					{this.addFactoryButton()}
				</div>
			</>
		)
	}
}
