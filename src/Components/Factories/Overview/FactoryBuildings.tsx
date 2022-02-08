import {Component} from "react";
import {DataList} from "../../../Data/DataList";
import {FactoryManager} from "../../../Structures/Factories";
import {FactoryBuildingsProps} from "../../../@types/Components/Factories/Overview/FactoryBuildingProps";

/**
 * Component providing summary of factory buildings.
 */
export class FactoryBuildings extends Component<FactoryBuildingsProps> {
	constructor(props: FactoryBuildingsProps) {
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

	private factoryBuildings(): JSX.Element {
		let factory = FactoryManager.getFactory(this.props.factoryId);
		if(factory == null) return <></>;

		let buildings = factory.countBuildings();
		let list = [];
		for(const [index, number] of Object.entries(buildings)) {
			try {
				let building = DataList.getBuilding(index);

				list.push(
					<tr key={index}>
						<td className="text-start">
							<span className="me-3">{number}x</span>
							{DataList.getBuildingIcon(index)}
							{building.name}
						</td>
					</tr>
				)
			} catch (e) {
				//
			}
		}

		return (
			<table className="table m-0 table-borderless">
				<tbody>
				{list}
				</tbody>
			</table>
		)
	}

	render(): JSX.Element {
		return this.factoryBuildings();
	}
}
