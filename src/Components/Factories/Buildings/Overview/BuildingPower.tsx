import {Component} from "react";
import {BuildingPowerProps} from "../../../../@types/Components/Factories/Buildings/BuildingPowerProps";
import {numberFormat} from "../../../../Helpers/NumberFormat";

/**
 * Component showing if building is consuming or generating power and how much.
 */
export class BuildingPower extends Component<BuildingPowerProps> {
	render(): JSX.Element {
		let building = this.props.building;

		if (building.isPowerGenerator()) {
			return (
				<div className="bold text-end text-success">
					<i className="fa fa-bolt fa-lg pe-2"/>
					+ {numberFormat(building.getPowerGenerate())} MW
				</div>
			);
		} else {
			if (building.getPowerUsage() === 0) {
				return <></>;
			} else {
				return (
					<div className="bold text-end text-danger">
						<i className="fa fa-bolt fa-lg pe-2"/>
						- {numberFormat(building.getPowerUsage())} MW
					</div>
				);
			}
		}
	}
}
