import {Component} from "react";
import {DataList} from "../../../Data/DataList";
import {numberFormat} from "../../../Helpers/NumberFormat";
import {FactoryManager} from "../../../Structures/Factories";
import {ResourceDataProps} from "../../../@types/Components/Factories/Overview/ResourceDataProps";

/**
 * Component showing group total production and consumption.
 */
export class ResourceData extends Component<ResourceDataProps> {
	constructor(props: ResourceDataProps) {
		super(props);

		this.handleOnSave = this.handleOnSave.bind(this);
	}

	handleOnSave(): void {
		this.forceUpdate();
	}

	componentDidMount(): void {
		window.addEventListener("onSave", this.handleOnSave)
	}

	componentWillUnmount(): void {
		window.removeEventListener("onSave", this.handleOnSave);
	}

	render(): JSX.Element {
		let list: JSX.Element[] = [];

		let factory = FactoryManager.getFactory(this.props.factoryId);
		if(factory == null) return <></>;

		let resources = factory.getResources();
		resources.forEach((resource) => {
			if(!this.props.renderCallback(resource.value)) return;

			let className = resource.value < 0
				? "text-danger"
				: "text-success";

			list.push(
				<tr key={resource.indexName}>
					<td className={className}>
						{DataList.getRecipeIcon(resource.indexName)}
						{numberFormat(resource.value)} {resource.units}
					</td>
				</tr>
			);
		});

		return (
			<table className="table m-0 table-borderless">
				<tbody>
				{list}
				</tbody>
			</table>
		);
	}
}
