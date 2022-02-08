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
		let exports = TransportManager.getFactoryExports(this.props.factory.id);
		if (exports.length === 0) return <></>;

		let exportsData = exports.map((data) => {
			return (
				<tr key={data.id}>
					<td>
						<ResourceTransport transportType={TransportType.Export} data={data}/>
					</td>
				</tr>
			)
		});

		return (
			<>
				{exportsData}
			</>
		)
	}

	private getImports(): JSX.Element {
		let imports = TransportManager.getFactoryImports(this.props.factory.id);
		if (imports.length === 0) return <></>;

		let importsData = imports.map((data) => {
			return (
				<tr key={data.id} >
					<td>
						<ResourceTransport transportType={TransportType.Import} data={data}/>
					</td>
				</tr>
			)
		});

		return <>{importsData}</>;
	}

	render(): JSX.Element {
		let exports = TransportManager.getFactoryExports(this.props.factory.id);
		let imports = TransportManager.getFactoryImports(this.props.factory.id);

		if(exports.length === 0 && imports.length === 0) return <></>;

		return (
			<table className="table table-bordered m-0 mb-3">
				<thead>
				<tr>
					<th>{this.props.children}</th>
				</tr>
				</thead>
				<tbody>
					{this.getExports()}
					{this.getImports()}
				</tbody>
			</table>
		)
	}
}
