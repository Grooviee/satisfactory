import {ModalComponent} from "../../../Wrappers/Modals/ModalComponent";
import {SelectRecipeModalProps} from "../../../../@types/Components/Factories/Buildings/SelectRecipeModalProps";
import {DataList} from "../../../../Data/DataList";
import {SelectRecipeModalState} from "../../../../@types/Components/Factories/Buildings/SelectRecipeModalState";
import {ChangeEvent} from "react";

export class SelectRecipeModal extends ModalComponent<SelectRecipeModalProps, SelectRecipeModalState> {
	constructor(props: SelectRecipeModalProps) {
		super(props);

		this.state = {
			modalShow: false,
			search: ""
		};

		this.handleSelectRecipe = this.handleSelectRecipe.bind(this);
		this.handleSearchRecipe = this.handleSearchRecipe.bind(this);
	}

	handleSelectRecipe(recipe: string): void {
		this.handleHide();
		this.props.onRecipeSelect(recipe);
	}

	handleSearchRecipe(event: ChangeEvent<HTMLInputElement>): void {
		this.setState({search: event.target.value});
	}

	selectButton(): JSX.Element {
		let className = "btn d-block w-100";
		let buttonText = <>{this.props.placeholder}</>;

		if (this.props.defaultRecipe === "" || typeof this.props.defaultRecipe === "undefined" || this.props.defaultRecipe == null) {
			className += " btn-primary";
		} else {
			className += " btn-outline-secondary";
			buttonText = (
				<>
					{DataList.getRecipeIcon(this.props.defaultRecipe)}
					{DataList.getRecipe(this.props.defaultRecipe).name}
				</>
			);
		}

		return (
			<button className={className} onClick={this.handleShow}>
				<span className="text-light">
					{buttonText}
				</span>
			</button>
		);
	}

	recipeSelection(): JSX.Element {
		let recipes = DataList.getRecipesByBuilding(this.props.building.getBuildingType());
		if (recipes === null) return <></>;

		let buttons: JSX.Element[] = [];
		let sorted = DataList.sortRecipes(recipes);
		for (const value of Object.values(sorted)) {
			if (this.state.search.length > 0) {
				let name = value.recipe.name.toLowerCase();
				let search = this.state.search.toLowerCase();
				if (!name.includes(search)) {
					continue;
				}
			}

			let recipeDetails: JSX.Element = <></>;
			let ingredients = DataList.getRecipeResources(value.recipe.ingredients, "text-danger w-100 text-start my-1");

			if (ingredients.length > 0) {
				let products = DataList.getRecipeResources(value.recipe.products, "text-success fw-bold text-end my-1");
				recipeDetails = (
					<div className="d-flex justify-content-between mt-3">
						<div className="d-flex align-items-center flex-column">{ingredients}</div>
						<div className="d-flex align-items-center justify-content-center flex-fill">
							<i className="fa fa-angle-double-right"/>
						</div>
						<div className="d-flex align-items-center flex-column">{products}</div>
					</div>
				);
			}

			buttons.push(
				<div className="col" key={value.index}>
					<div className="card border-0 h-100">
						<div className="card-body p-0 pe-3 py-3">
							<button className="btn btn-outline-light d-block w-100 h-100 p-3" onClick={_ => {
								this.handleSelectRecipe(value.index)
							}}>
								{DataList.getRecipeIcon(value.index, 64, "d-block mx-auto  mb-2")}
								<span className="fw-bold pb-2">{value.recipe.name}</span>
								{recipeDetails}
							</button>
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="row row-cols-5">
				{buttons}
			</div>
		);
	}

	render(): JSX.Element {
		return (
			<tr>
				<td className="align-middle">
					{this.props.children}
				</td>
				<td>
					{this.selectButton()}

					<this.modal className="modal-fullscreen">
						<this.modalContent>
							<div className="modal-header">
								<div className="d-flex justify-content-between w-100">
									<h5 className="modal-title">
										{this.props.placeholder} for <span
										className="fw-bold">{this.props.building.getBuildingName()}</span>
									</h5>
									<div className="flex-fill ms-3 me-5">
										<input type="text" placeholder="Search recipes..."
										       className="form-control form-control-sm"
										       onChange={this.handleSearchRecipe}/>
									</div>
									<button className="btn-close" onClick={this.handleHide}/>
								</div>
							</div>
							<this.modalBody>
								{this.recipeSelection()}
							</this.modalBody>
						</this.modalContent>
					</this.modal>
				</td>
			</tr>
		)
	}
}
