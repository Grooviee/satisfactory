import React, {Component} from "react";
import {MinerPurityProps} from "../../../@types/Components/Factories/Buildings/MinerPurityProps";

/**
 * Component providing purity selector for buildings.
 */
export class SourcePurity extends Component<MinerPurityProps> {
	constructor(props: MinerPurityProps) {
		super(props);
		this.handlePurity = this.handlePurity.bind(this);
	}

	handlePurity(event: any): void {
		let building = this.props.building;
		building.specials = event.target.value;
		this.props.onBuildingChange(building);
	}

	render(): JSX.Element {
		return (
			<td>
				<span className="d-inline-block mb-2">Purity</span>
				<select className="form-select form-select-sm"
				        value={this.props.building.specials} onChange={this.handlePurity}>
					<option value="0.5">Impure</option>
					<option value="1">Normal</option>
					<option value="2">Pure</option>
				</select>
			</td>
		)
	}
}
