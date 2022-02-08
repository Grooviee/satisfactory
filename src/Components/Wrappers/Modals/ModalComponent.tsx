import {Component, createRef, HTMLProps, RefObject} from "react";
import {ModalComponentState} from "../../../@types/Components/Wrappers/Modals/ModalComponentState";
import {Modal} from "bootstrap";
import {ModalComponentProps} from "../../../@types/Components/Wrappers/Modals/ModalComponentProps";

/**
 * Abstract component for building modals. This method is providing default Props & State as well
 * as mounting component with modal creation and unmounting. Also access to methods like Show & Hide.
 */
export abstract class ModalComponent<P extends ModalComponentProps, S extends ModalComponentState> extends Component<P, S> {
	protected modalRef: RefObject<any>;
	protected modalInstance!: Modal;

	protected constructor(props: P) {
		super(props);

		this.modalRef = createRef();
		this.handleShow = this.handleShow.bind(this);
		this.handleHide = this.handleHide.bind(this);
		this.modal = this.modal.bind(this);
		this.modalHeader = this.modalHeader.bind(this);
	}

	componentDidMount(): void {
		this.modalInstance = new Modal(this.modalRef.current, {
			backdrop: this.props.backdrop
		});

		if (this.state.modalShow && this.modalInstance) {
			this.modalInstance.show();
		}
	}

	componentWillUnmount(): void {
		if(typeof this.modalInstance === "undefined") return;
		this.modalInstance.dispose();
	}

	handleShow(): void {
		if (!this.modalInstance) return;
		this.modalInstance.show();
	}

	handleHide(): void {
		if (!this.modalInstance) return;
		this.modalInstance.hide();
	}

	modal(props: HTMLProps<HTMLDivElement>): JSX.Element {
		let className = "modal-dialog";
		if(typeof props.className !== "undefined") {
			className += " " + props.className;
		}

		return (
			<div className="modal" ref={this.modalRef}>
				<div className={className}>
					{props.children}
				</div>
			</div>
		)
	}

	modalContent(props: HTMLProps<HTMLDivElement>): JSX.Element {
		return (
			<div className="modal-content">
				{props.children}
			</div>
		)
	}

	modalHeader(props: HTMLProps<HTMLDivElement>): JSX.Element {
		return (
			<div className="modal-header">
				<h5 className="modal-title">
					{props.children}
				</h5>
				<button className="btn-close" onClick={this.handleHide}/>
			</div>
		)
	}

	modalBody(props: HTMLProps<HTMLDivElement>): JSX.Element {
		return (
			<div className="modal-body">
				{props.children}
			</div>
		)
	}

	modalFooter(props: HTMLProps<HTMLDivElement>): JSX.Element {
		return (
			<div className="modal-footer">
				{props.children}
			</div>
		)
	}
}
