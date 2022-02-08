import {Component} from "react";
import {numberFormat} from "../../../Helpers/NumberFormat";
import {FactoryManager} from "../../../Structures/Factories";
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
		let factory = FactoryManager.getFactory(this.props.factoryId);
		if(factory == null) return <></>;

		let generate = factory.getPowerGenerate();
		if (generate === 0) return <></>;

		return (
			<div className="py-2">
				<span className="ps-3 text-success bold">
						<i className="fa fa-bolt pe-2 fa-lg"/>
						+ {numberFormat(generate)} MW
					</span>
			</div>
		)
	}

	private factoryPowerUsage(): JSX.Element {
		let factory = FactoryManager.getFactory(this.props.factoryId);
		if(factory == null) return <></>;

		let usage = factory.getPowerUsage();
		if (usage === 0) return <></>;

		return (
			<div className="py-2">
				<span className="ps-3 text-danger">
					<i className="fa fa-bolt pe-2 fa-lg"/>
					- {numberFormat(usage)} MW
				</span>
			</div>
		)
	}

	render(): JSX.Element {
		return (
			<>
				{this.factoryPowerGenerate()}
				{this.factoryPowerUsage()}
			</>
		)
	}
}
