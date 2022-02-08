import {Component} from "react";
import {ResourceOverviewProps} from "../../../@types/Components/Factories/Buildings/ResourcceOverviewProps";

/**
 * Component providing overview of products.
 */
export class ResourceOverview extends Component<ResourceOverviewProps> {
	private buildList(): JSX.Element[] {
		let list: JSX.Element[] = [];
		if(this.props.resources.length === 0) return list;

		let i = 0;
		let style = "text-center " + this.props.formatting;
		list = this.props.resources.map((resource): JSX.Element => {
			return (
				<tr key={i++}>
					<td className={style}>
						{resource.getFormatted()}
					</td>
				</tr>
			)
		});

		return list;
	}

	render(): JSX.Element {
		if(!this.props.has) return (<div/>);

		return (
			<div className="col-6">
				<table className="table table-borderless">
					<thead>
					<tr>
						<th colSpan={2} className="text-center">
							{this.props.title}
						</th>
					</tr>
					</thead>
					<tbody>
					{this.buildList()}
					</tbody>
				</table>
			</div>
		)
	}
}
