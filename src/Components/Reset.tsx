import {Component} from "react";
import {FactoryManager} from "../Structures/Factories";
import {TransportManager} from "../Structures/Transportation";
import {onRefreshApp} from "../Events/OnRefreshApp";
import {SettingsManager} from "../Structures/Settings";

export class Reset extends Component<any, any> {
	handleResetData(): void {
		FactoryManager.reset();
		TransportManager.reset();
		SettingsManager.reset();
		window.dispatchEvent(onRefreshApp);
	}

	render(): JSX.Element {
		return (
			<button className="btn btn-sm btn-outline-danger ms-2" onClick={this.handleResetData}>
				<i className="fa fa-trash"/> Reset data
			</button>
		)
	}
}
