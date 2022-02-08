import {FactoryManager} from "../../Structures/Factories";
import {Component} from "react";

/**
 * Component showing statistics about power.
 */
export class PowerStatistics extends Component<any> {
	constructor(props: any) {
		super(props);

		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate(): void {
		this.forceUpdate();
	}

	componentDidMount(): void {
		window.addEventListener("onSave", this.handleUpdate);
	}

	componentWillUnmount(): void {
		window.removeEventListener("onSave", this.handleUpdate);
	}

	render(): JSX.Element {
		let consumption = FactoryManager.getTotalPowerConsumption();
		let production = FactoryManager.getTotalPowerProduction();
		let efficiency = FactoryManager.getPowerEfficiency();

		let consumptionRounded = (Math.round(consumption * 100) / 100).toFixed(2);
		let productionRounded = (Math.round(production * 100) / 100).toFixed(2);
		let efficiencyRounded = (Math.round(efficiency * 100) / 100).toFixed(2);

		let total = production - consumption;
		let totalRounded = (Math.round(total * 100) / 100).toFixed(2);

		let totalClass = "";
		if(total < 0) {
			totalClass = "text-danger bold";
		}
		if(total > 0) {
			totalClass = "text-success";
		}

		return (
			<div className="card border-dark my-3">
				<h5 className="card-header border-dark bg-dark">
					Power Statistics
				</h5>
				<table className="table border-dark">
					<tbody>
					<tr>
						<td className="text-start">
							<strong>Production</strong>
						</td>
						<td className="text-end">
							{productionRounded} MW
						</td>
					</tr>
					<tr>
						<td className="text-start border-dark"><strong>Consumption</strong></td>
						<td className="text-end border-dark">
							<span className="text-danger">-{consumptionRounded} MW</span>
						</td>
					</tr>
					</tbody>
					<tfoot >
					<tr>
						<td className="text-start">
							<strong>Power left</strong>
						</td>
						<td className="text-end">
							<strong className={totalClass}>{totalRounded} MW</strong>
						</td>
					</tr>
					</tfoot>
				</table>

				<table className="table table-borderless mb-0">
					<tbody>
					<tr>
						<td className="text-start">
							<strong>Efficiency</strong>
						</td>
						<td className="text-end">
							{efficiencyRounded} %
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
