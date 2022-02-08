import {ChangeEvent, Component} from "react";
import {DataList} from "../../Data/DataList";
import {TransportManager} from "../../Structures/Transportation";
import {FactoryManager} from "../../Structures/Factories";
import {TransportType} from "./TransportType";
import {ResourceTransportProps} from "../../@types/Components/Transportation/ResourceTransportProps";

/**
 * Component showing transported resources.
 */
export class ResourceTransport extends Component<ResourceTransportProps> {
	constructor(props: ResourceTransportProps) {
		super(props);

		this.handleChangeValue = this.handleChangeValue.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChangeValue(e: ChangeEvent<HTMLInputElement>): void{
		this.props.data.resource.value = parseFloat(e.target.value);
		TransportManager.update(this.props.data);
	}

	handleDelete(): void {
		TransportManager.remove(this.props.data.id);
		TransportManager.save();
	}

	private pathData(): JSX.Element {
		switch(this.props.transportType) {
			case TransportType.Export:
				return <><strong>To:</strong> {FactoryManager.getFactoryName(this.props.data.toFactoryId)}</>;
			case TransportType.Import:
				return <><strong>From:</strong> {FactoryManager.getFactoryName(this.props.data.fromFactoryId)}</>;
		}
	}

	render(): JSX.Element {
		let img = DataList.getRecipeIcon(this.props.data.resource.indexName, 24, "p-0");

		return (
			<div className="mb-3">
				<div className="input-group input-group-sm">
					<div className="input-group-text bg-transparent">
						{img}
					</div>
					<input
						type="number"
						className="form-control-sm form-control"
						value={this.props.data.resource.value}
						onChange={this.handleChangeValue}/>
					<button className="btn btn-sm btn-outline-danger" onClick={this.handleDelete}>
						<i className="fa fa-times"/>
					</button>
				</div>
				<small>{this.pathData()}</small>
			</div>
		);
	}
}
