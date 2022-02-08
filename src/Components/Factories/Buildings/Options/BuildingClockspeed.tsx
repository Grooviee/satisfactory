import {ChangeEvent, Component} from "react";
import {BuildingClockspeedProps} from "../../../../@types/Components/Factories/Buildings/BuildingClockspeedProps";
import {BuildingClockspeedState} from "../../../../@types/Components/Factories/Buildings/BuildingClockspeedState";

/**
 * Component for setting building clockspeed.
 */
export class BuildingClockspeed extends Component<BuildingClockspeedProps, BuildingClockspeedState> {
	constructor(props: BuildingClockspeedProps) {
		super(props);

		this.state = {
			clockspeed: props.building.clockspeed.toString()
		};

		this.handleSetClockSpeed = this.handleSetClockSpeed.bind(this);
	}

	/**
	 * Set building clock speed.
	 * @param event
	 */
	handleSetClockSpeed(event: ChangeEvent<HTMLInputElement>): void {
		let value = parseFloat(event.target.value);
		if (isNaN(value)) {
			value = 0;
		}

		if (value < 0) {
			value = 0;
		}

		if (value > 250) {
			value = 250;
		}

		let building = this.props.building
		building.clockspeed = value;
		this.props.onBuildingUpdate(building);
		this.setState({clockspeed: event.target.value});
	}

	render(): JSX.Element {
		if (this.props.building.getBuildingType() === "special") return <></>;

		return (
			<tr>
				<td className="align-middle">
					Clockspeed
				</td>
				<td>
					<div className="d-flex justify-content-end">
						<div className="input-group building-amount">
							<input type="text" className="form-control form-control-sm"
							       value={this.state.clockspeed}
							       onChange={this.handleSetClockSpeed}/>
							<span className="input-group-text">
								<i className="fa fa-percent fa-xs"/>
							</span>
						</div>
					</div>
				</td>
			</tr>
		);
	}
}
