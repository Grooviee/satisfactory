import {Component} from "react";

export class Footer extends Component<any, any> {
	render(): JSX.Element {
		return (
			<footer className="container-fluid my-5 pt-5 border-top text-center fs-6">
				Created by <a href="https://twitter.com/JZechy" target="_blank" rel="noreferrer">Zechy</a>
			</footer>
		);
	}
}
