import React, {Component} from "react";
import {FactoryManager} from "../Structures/Factories";
import {TransportManager} from "../Structures/Transportation";
import {SettingsManager} from "../Structures/Settings";

/**
 * Button providing ability to import factory data.
 */
export class Import extends Component<any, any> {
	constructor(props: any) {
		super(props);

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleButtonClick(): void {
		document.getElementById("import-input")?.click();
	}

	handleFileChosen(file: File): void {
		let fileReader = new FileReader();
		fileReader.onloadend = (e) => {
			if(fileReader.result == null) return;

			let json = JSON.parse(fileReader.result.toString());
			FactoryManager.import(JSON.stringify(json.factories));
			TransportManager.import(JSON.stringify(json.transportation));
			SettingsManager.import(JSON.stringify(json.settings));

			window.location.reload();
		};
		fileReader.readAsText(file);
	}

	handleOnChange(event: any): void {
		let file = event.target.files[0];
		if(file == null) return;
		this.handleFileChosen(file);
	}

	render(): JSX.Element {
		return (
			<div className="d-inline-block ms-2">
				<button className="btn btn-sm btn-outline-secondary" onClick={this.handleButtonClick}>
					<i className="fa fa-upload"/> Import
				</button>

				<input type="file" className="d-none" accept="application/json" id="import-input"
				       onChange={this.handleOnChange}/>
			</div>
		);
	}
}
