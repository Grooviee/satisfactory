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
				return <>
					<i className="fa fa-long-arrow-alt-right pe-2"/>
					{FactoryManager.getFactoryName(this.props.data.toFactoryId)}
				</>;
			case TransportType.Import:
				return <>
					<i className="fa fa-long-arrow-alt-left pe-2"/>
					{FactoryManager.getFactoryName(this.props.data.fromFactoryId)}
				</>;
		}
	}

	render(): JSX.Element {
		let img = DataList.getRecipeIcon(this.props.data.resource.indexName, 24, "pe-2");
		let className = "input-group-text w-25";
		switch(this.props.transportType) {
			case TransportType.Export:
				className += " bg-danger";
				break;
			case TransportType.Import:
				className += " bg-success";
				break;
		}

		return (
			<div className="input-group input-group-sm">
				<div className={className}>
					{this.pathData()}
				</div>
				<div className="input-group-text bg-secondary w-50">
					{img}
					{DataList.getRecipe(this.props.data.resource.indexName).name}
				</div>
				<input
					type="number"
					className="form-control-sm form-control border-end-0"
					value={this.props.data.resource.value}
					onChange={this.handleChangeValue}/>
				<div className="input-group-text bg-transparent border-start-0">
					/ min
				</div>
				<button className="btn btn-sm btn-outline-danger" onClick={this.handleDelete}>
					<i className="fa fa-times"/>
				</button>
			</div>
		);
	}
}
