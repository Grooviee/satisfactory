import {BuildingList} from "./Buildings/BuildingList";
import {FactoryEditorProps} from "../../@types/Components/Factories/FactoryEditorProps";
import {ModalComponent} from "../Wrappers/Modals/ModalComponent";
import {ModalComponentState} from "../../@types/Components/Wrappers/Modals/ModalComponentState";
import {EnergyOverview} from "./Overview/EnergyOverview";
import {ResourceData} from "./Overview/ResourceData";
import {FactoryData} from "../../Structures/FactoryData";
import {TransportOverview} from "../Transportation/TransportOverview";

export class FactoryEditor extends ModalComponent<FactoryEditorProps, ModalComponentState> {
	constructor(props: FactoryEditorProps) {
		super(props);

		this.state = {
			modalShow: true
		};
	}

	handleHide() {
		super.handleHide();
		this.props.onCloseEditor();
	}

	render(): JSX.Element {
		return (
			<>
				<this.modal className="modal-xl">
					<this.modalContent>
						<this.modalHeader>
							{this.props.factory.name}
						</this.modalHeader>
						<this.modalBody>
							<BuildingList factory={this.props.factory}/>
						</this.modalBody>
						<this.modalFooter>
							<div className="row row-cols-3 w-100">
								<div className="col">
									<EnergyOverview factory={this.props.factory}/>
								</div>
								<div className="col">
									<ResourceData factory={this.props.factory}
									              renderCallback={FactoryData.insufficientFilter}>
										Insufficient resources
									</ResourceData>
								</div>
								<div className="col">
									<ResourceData factory={this.props.factory}
									              renderCallback={FactoryData.productionFilter}>
										Final production
									</ResourceData>
								</div>
							</div>
							<div className="row w-100">
								<div className="col-12">
									<TransportOverview factory={this.props.factory}>
										Transportation
									</TransportOverview>
								</div>
							</div>
						</this.modalFooter>
					</this.modalContent>
				</this.modal>
			</>
		);
	}
}
