import {Component} from "react";
import {numberFormat} from "../../../Helpers/NumberFormat";
import {EnergyOverviewProps} from "../../../@types/Components/Factories/Overview/EnergyOverviewProps";

/**
 * Component providing total energy overview for a group/factory.
 */
export class EnergyOverview extends Component<EnergyOverviewProps, any> {
	constructor(props: EnergyOverviewProps) {
		super(props);

		this.handleOnSave = this.handleOnSave.bind(this);
	}

	handleOnSave(): void {
		this.forceUpdate();
	}

	componentDidMount(): void {
		window.addEventListener("onSave", this.handleOnSave);
	}

	componentWillUnmount(): void {
		window.removeEventListener("onSave", this.handleOnSave);
	}

	private factoryPowerGenerate(): JSX.Element {
		let factory = this.props.factory;
		if (factory == null) return <></>;

		let generate = factory.getPowerGenerate();
		if (generate === 0) return <></>;

		return (
			<tr>
				<td className="text-success">
					<i className="fa fa-bolt pe-2 fa-lg"/>
					+ {numberFormat(generate)} MW
				</td>
			</tr>
		)
	}

	private factoryPowerUsage(): JSX.Element {
		let factory = this.props.factory;
		if (factory == null) return <></>;

		let usage = factory.getPowerUsage();
		if (usage === 0) return <></>;

		return (
			<tr>
				<td className="text-danger">
					<i className="fa fa-bolt pe-2 fa-lg"/>
					- {numberFormat(usage)} MW
				</td>
			</tr>
		)
	}

	render(): JSX.Element {
		return (
			<table className="table m-0 table-bordered">
				<thead>
				<tr>
					<th>Power</th>
				</tr>
				</thead>
				<tbody>
				{this.factoryPowerGenerate()}
				{this.factoryPowerUsage()}
				</tbody>
			</table>
		)
	}
}
