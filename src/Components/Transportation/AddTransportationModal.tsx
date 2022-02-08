import {ChangeEvent, Component, createRef, RefObject} from "react";
import {Modal} from "bootstrap";
import {Select2} from "../Wrappers/Select2";
import {FactoryManager} from "../../Structures/Factories";
import {DataList} from "../../Data/DataList";
import {renderToString} from "react-dom/server";
import {TransportManager} from "../../Structures/Transportation";
import {Resource} from "../../Structures/Resource";
import {AddTransportationModalProps} from "../../@types/Components/Transportation/AddTransportationModalProps";
import {AddTransportationModalState} from "../../@types/Components/Transportation/AddTransportationModalState";
import {DataState} from "../../@types/Components/Wrappers/DataState";
import {TemplateResult} from "../../@types/Components/Wrappers/TemplateResult";

/**
 * Modal Component for creating export from factory.
 */
export class AddTransportationModal extends Component<AddTransportationModalProps, AddTransportationModalState> {
	modalRef: RefObject<any>;
	modalInstance!: Modal;

	constructor(props: AddTransportationModalProps) {
		super(props);

		this.state = {
			fromFactory: props.fromFactory,
			toFactory: -1,
			modalShow: false,
			recipe: "",
			value: 0
		}

		this.modalRef = createRef();

		this.handleShow = this.handleShow.bind(this);
		this.handleHide = this.handleHide.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSetFromFactory = this.handleSetFromFactory.bind(this);
		this.handleSetToFactory = this.handleSetToFactory.bind(this);
		this.handleSetRecipe = this.handleSetRecipe.bind(this);
		this.handleSetValue = this.handleSetValue.bind(this);
		this.onSaveUpdate = this.onSaveUpdate.bind(this);
	}

	onSaveUpdate(): void {
		this.forceUpdate();
	}

	componentDidMount(): void {
		window.addEventListener("onSave", this.onSaveUpdate);

		this.modalInstance = new Modal(this.modalRef.current, {
			backdrop: true
		});

		if (this.state.modalShow) {
			this.modalInstance.show();
		}
	}

	componentWillUnmount(): void {
		window.removeEventListener("onSave", this.onSaveUpdate);
	}

	handleShow(): void {
		if (!this.modalInstance) return;
		this.modalInstance.show();
	}

	handleHide(): void {
		if (!this.modalInstance) return;
		this.modalInstance.hide();
	}

	handleSubmit(): void {
		this.modalInstance.hide();

		TransportManager.add(
			this.state.fromFactory,
			this.state.toFactory,
			new Resource(this.state.recipe, this.state.value, "/ min", "")
		);
	}

	handleSetFromFactory(value: string): void {
		this.setState(_ => ({
			fromFactory: parseInt(value),
			modalShow: true
		}));
	}

	handleSetToFactory(value: string): void {
		this.setState(_ => ({
			toFactory: parseInt(value),
			modalShow: true
		}));
	}

	handleSetRecipe(value: string): void {
		this.setState(_ => ({
			recipe: value,
			modalShow: true
		}));
	}

	handleSetValue(e: ChangeEvent<HTMLInputElement>): void {
		let value = parseFloat(e.target.value);
		if(isNaN(value)) value = 0;

		this.setState(_ => ({
			value: value,
			modalShow: true
		}));
	}

	setTemplateResult(state: DataState): TemplateResult {
		if (!state.id) {
			return state.text;
		}

		let iconImg = renderToString(DataList.getRecipeIcon(state.id.toString()));

		return $(
			"<span>" +
			iconImg + " " + state.text +
			"</span>"
		);
	}

	render(): JSX.Element {
		let factory = FactoryManager.getFactory(this.props.fromFactory);
		let productions = FactoryManager.getFactoryProductions(this.state.fromFactory);
		let options: JSX.Element[] = [];
		options.push(<option key={0}/>);

		if (productions.length !== 0) {
			productions.forEach((resource) => {
				options.push(
					<option key={resource.indexName} value={resource.indexName}>
						{DataList.getRecipe(resource.indexName).name} ({resource.value} / min)
					</option>);
			})
		}
		return (
			<>
				<button className="btn btn-sm btn-success mx-2" onClick={this.handleShow}>
					<i className="fa fa-long-arrow-alt-right pe-2"/> Add Export
				</button>
				<div className="modal" ref={this.modalRef}>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									Add Export from {factory?.name}
								</h5>
								<button className="btn-close" onClick={this.handleHide}/>
							</div>

							<div className="modal-body">
								<div className="row mb-3">
									<div className="col-6">
										<Select2 placeholder="Select export factory"
										         className="form-select form-select-sm"
										         onChange={this.handleSetFromFactory}
										         options={FactoryManager.toOptions()}
										         defaultValue={this.state.fromFactory}/>
									</div>
									<div className="col-6">
										<Select2
											className="form-select form-select-sm"
											placeholder="Select import factory"
											options={FactoryManager.toOptions()}
											onChange={this.handleSetToFactory}
											defaultValue={this.state.toFactory}/>
									</div>
								</div>

								<div className="row mb-3">
									<div className="col-6">
										<Select2
											className="form-select form-select-sm"
											placeholder="Recipe for export"
											options={options}
											onChange={this.handleSetRecipe}
											templateResult={this.setTemplateResult}
											defaultValue={this.state.recipe}/>
									</div>
									<div className="col-6">
										<input type="number"
										       className="form-control form-control-sm"
										       placeholder="Exported value" defaultValue={this.state.value}
										       onChange={this.handleSetValue}/>
									</div>
								</div>

								<div className="form-group text-center">
									<button className="btn btn-primary btn-sm" onClick={this.handleSubmit}>
										<i className="fa fa-plus pe-2"/>
										Add Export
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
