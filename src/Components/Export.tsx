import { Component } from "react";

/**
 * Button providing ability to export factory data.
 */
export class Export extends Component<any, any> {
	componentDidMount(): void {
		window.addEventListener("onSave", () => {
			this.forceUpdate();
		});
	}

	render(): JSX.Element {
		let factories = localStorage.getItem("factories");
		factories = factories == null ? JSON.stringify({}) : factories;
		let transportation = localStorage.getItem("transportation");
		transportation =
			transportation == null ? JSON.stringify({}) : transportation;

		let value =
			'{"factories": ' +
			factories +
			', "transportation": ' +
			transportation +
			"}";

		return (
			<form
				method="post"
				action="https://satisfactory.jplekkerkerker.nl/export.php"
				target="_blank"
				className="d-inline-block ms-2"
			>
				<input type="hidden" name="data" value={value} />
				<button type="submit" className="btn btn-sm btn-outline-secondary">
					<i className="fa fa-download" /> Export
				</button>
			</form>
		);
	}
}
