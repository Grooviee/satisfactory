import {Component, createRef, RefObject} from "react";
import {Modal} from "bootstrap";
import {DataList} from "../../../Data/DataList";
import {Select2} from "../../Wrappers/Select2";
import {AddBuildingModalProps} from "../../../@types/Components/Factories/Buildings/AddBuildingModalProps";
import {AddBuildingModalState} from "../../../@types/Components/Factories/Buildings/AddBuildingModalState";
import {DataState} from "../../../@types/Components/Wrappers/DataState";
import {TemplateResult} from "../../../@types/Components/Wrappers/TemplateResult";

/**
 * Modal for adding a new building to factory.
 */
export class AddBuildingModal extends Component<AddBuildingModalProps, AddBuildingModalState> {
	modalRef: RefObject<any>;
	modalInstance!: Modal;

	constructor(props: AddBuildingModalProps) {
		super(props);

		this.state = {
			modalShow: false
		}

		this.modalRef = createRef();

		this.handleShow = this.handleShow.bind(this);
		this.handleHide = this.handleHide.bind(this);
		this.handleSet = this.handleSet.bind(this);
	}

	componentDidMount(): void {
		this.modalInstance = new Modal(this.modalRef.current, {
			backdrop: true
		});

		if (this.state.modalShow) {
			this.modalInstance.show();
		}
	}

	handleShow(): void {
		if (!this.modalInstance) return;
		this.modalInstance.show();
	}

	handleHide(): void {
		if (!this.modalInstance) return;
		this.modalInstance.hide();
	}

	handleSet(value: any): void {
		this.modalInstance.hide();
		let building = this.props.factory.addBuilding();
		building.setBuilding(value);

		this.props.factory.updateBuilding(building);
		this.props.onUpdate();
	}

	private static setBuildingTemplate(state: DataState): TemplateResult {
		if (!state.id) {
			return state.text;
		}

		return $(
			"<span><img src='img/" + state.id + ".png' alt='' height='24' class='pe-2'>" + state.text + "</span>"
		);
	}

	private buildingListButtons(): JSX.Element {
		let buttons: JSX.Element[] = [];
		for (let value of Object.values(DataList.getBuildingsSortedByName())) {
			buttons.push(
				<div className="col" key={value.index}>
					<div className="card border-0 h-100">
						<div className="card-body p-0 pe-3 py-3">
							<button className="btn btn-outline-light d-block w-100 h-100" onClick={() => {
								this.handleSet(value.index)
							}}>
								{DataList.getBuildingIcon(value.index, 64, "my-2 d-block mx-auto")}
								<span className="fs-6">{value.def.name}</span>
							</button>
						</div>
					</div>
				</div>

			);
		}

		return (
			<div className="row row-cols-8">
				{buttons}
			</div>
		)
	}

	private selectBuilding(): JSX.Element {
		let options = [];
		options.push(<option key={0}/>);
		for (const [key, value] of Object.entries(DataList.buildings)) {
			options.push(<option key={key} value={key}>{value.name}</option>);
		}

		return (
			<Select2
				className="form-select form-select-sm"
				placeholder="Select building"
				options={options}
				onChange={this.handleSet}
				templateResult={AddBuildingModal.setBuildingTemplate}
				onChangeReset={true}/>
		);
	}

	public render(): JSX.Element {
		return (
			<>
				<button className="btn btn-sm btn-success mx-2" onClick={this.handleShow}>
					<i className="fa fa-plus pe-2"/> Add building
				</button>
				<div className="modal" ref={this.modalRef}>
					<div className="modal-dialog modal-fullscreen modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									Add building to {this.props.factory.name}
								</h5>
								<button className="btn-close" onClick={this.handleHide}/>
							</div>

							<div className="modal-body">
								{this.buildingListButtons()}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
