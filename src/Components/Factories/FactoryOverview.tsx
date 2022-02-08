import {Component} from "react";
import {TransportOverview} from "../Transportation/TransportOverview";
import {ResourceData} from "./Overview/ResourceData";
import {EnergyOverview} from "./Overview/EnergyOverview";
import {FactoryBuildings} from "./Overview/FactoryBuildings";
import {FactoryOverviewProps} from "../../@types/Components/Factories/FactoryOverviewProps";

/**
 * Component providing overview data for factory.
 */
export class FactoryOverview extends Component<FactoryOverviewProps, any> {
	// noinspection JSMethodCanBeStatic
	private onlyConsumptions(value: number): boolean {
		return value < 0;
	}

	// noinspection JSMethodCanBeStatic
	private onlyProductions(value: number): boolean {
		return value > 0;
	}

	render(): JSX.Element {
		return (
			<table className="table border-dark m-0">
				<tbody>
				<tr>
					<td width={200} className="border-end border-dark">
						<EnergyOverview factoryId={this.props.factory.id}/>
					</td>
					<td width={300} className="border-end border-dark">
						<FactoryBuildings factoryId={this.props.factory.id}/>
					</td>
					<td width={200}>
						<ResourceData factoryId={this.props.factory.id} renderCallback={this.onlyConsumptions}/>
					</td>
					<td width={200}>
						<ResourceData factoryId={this.props.factory.id} renderCallback={this.onlyProductions}/>
					</td>
					<td>
						<TransportOverview factoryId={this.props.factory.id}/>
					</td>
				</tr>
				</tbody>
			</table>
		);
	}
}
