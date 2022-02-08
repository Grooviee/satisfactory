import {Component} from "react";
import {SourcePurity} from "./SourcePurity";
import {BuildingDetailsProps} from "../../../../@types/Components/Factories/Buildings/BuildingDetailsProps";
import {SelectRecipeModal} from "./SelectRecipeModal";

/**
 * Components showing building extra details like recipe select or
 * source purity based on its type.
 */
export class BuildingOptions extends Component<BuildingDetailsProps> {
	constructor(props: BuildingDetailsProps) {
		super(props);

		this.handleSetRecipe = this.handleSetRecipe.bind(this);
	}

	handleSetRecipe(recipe: string): void {
		let building = this.props.building;
		if (building.getBuildingType() === "coalGenerator") {
			building.specials = recipe;
		} else {
			building.recipe = recipe;
		}

		this.props.onBuildingChange(building);
	}

	private getRecipeSelect(label: string = "Recipe", placeholder: string = "Select recipe"): JSX.Element {
		return (
			<SelectRecipeModal
				key="recipe"
				backdrop={false}
				onRecipeSelect={this.handleSetRecipe}
				defaultRecipe={this.props.building.getRecipe()}
				placeholder={placeholder}
				building={this.props.building}>
				{label}
			</SelectRecipeModal>
		);
	}

	private getSourcePurity(): JSX.Element {
		return <SourcePurity key="purity" building={this.props.building}
		                     onBuildingChange={this.props.onBuildingChange}/>;
	}

	getComponents(): JSX.Element[] {
		let components: JSX.Element[] = [];

		switch (this.props.building.getBuildingType()) {
			case "miner":
			case "resourceWellExtractor":
				components.push(this.getRecipeSelect());
				components.push(this.getSourcePurity());
				break;
			case "coalGenerator":
			case "fuelGenerator":
				components.push(this.getRecipeSelect("Fuel", "Select Fuel"));
				break;
			case "waterExtractor":
			case "special":
				break;
			case "geothermalGenerator":
			case "oilExtractor":
				components.push(this.getSourcePurity());
				break;
			default:
				components.push(this.getRecipeSelect());
				break;
		}

		return components;
	}

	render(): JSX.Element[] {
		return this.getComponents();
	}
}
