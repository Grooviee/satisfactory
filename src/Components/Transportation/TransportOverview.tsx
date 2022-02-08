import {Component} from "react";
import {TransportManager} from "../../Structures/Transportation";
import {ResourceTransport} from "./ResourceTransport";
import {TransportType} from "./TransportType";
import {TransportOverviewProps} from "../../@types/Components/Transportation/TransportOverviewProps";

/**
 * Component rendering every single resource transport for factory.
 */
export class TransportOverview extends Component<TransportOverviewProps, any> {
	constructor(props: TransportOverviewProps) {
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

	private getExports(): JSX.Element {
		let exports = TransportManager.getFactoryExports(this.props.factoryId);
		if (exports.length === 0) return <></>;

		let exportsData = exports.map((data) => {
			return <ResourceTransport key={data.id} transportType={TransportType.Export} data={data}/>
		});

		return (
			<>
				<h6 className="text-danger">Exports</h6>
				{exportsData}
			</>
		)
	}

	private getImports(): JSX.Element {
		let imports = TransportManager.getFactoryImports(this.props.factoryId);
		if (imports.length === 0) return <></>;

		let importsData = imports.map((data) => {
			return <ResourceTransport key={data.id} transportType={TransportType.Import} data={data}/>
		});

		return (
			<>
				<h6 className="text-success">Imports</h6>
				{importsData}
			</>
		)
	}

	render(): JSX.Element {
		return (
			<>
				{this.getExports()}
				{this.getImports()}
			</>
		)
	}
}
