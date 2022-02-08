import {Component} from "react";
import {FactoryList} from "../Components/Factories/FactoryList";
import {ProductionStatistics} from "../Components/Statistics/ProductionStatistics";
import {PowerStatistics} from "../Components/Statistics/PowerStatistics";
import {Footer} from "../Common/Footer";

/**
 * Component of factory manager.
 */
export class Manager extends Component<any, any> {
	componentDidMount(): void {
		window.addEventListener("onRefreshApp", () => {
			this.forceUpdate();
		});
	}

	render(): JSX.Element {
		return (
			<div className="container-fluid p-5 pt-3">
				<div className="row">
					<div className="col-md-8">
						<FactoryList/>
					</div>
					<div className="col-md-4">
						<div className="sticky-top">
							<ProductionStatistics/>
							<PowerStatistics/>
						</div>
					</div>
				</div>

				<Footer/>
			</div>
		);
	}
}
