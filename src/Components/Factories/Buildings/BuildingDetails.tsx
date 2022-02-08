import {Component} from "react";
import {RecipeSelect} from "./RecipeSelect";
import {SourcePurity} from "./SourcePurity";
import {BuildingDetailsProps} from "../../../@types/Components/Factories/Buildings/BuildingDetailsProps";

/**
 * Components showing building extra details like recipe select or
 * source purity based on its type.
 */
export class BuildingDetails extends Component<BuildingDetailsProps> {
	private getRecipeSelect(label: string = "Recipe", placeholder: string = "Select recipe"): JSX.Element {
		return <RecipeSelect key="recipe"
		                     building={this.props.building}
		                     onBuildingChange={this.props.onBuildingChange}
		                     label={label}
		                     placeholder={placeholder}/>;
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

	render(): JSX.Element {
		return (
			<table className="table table-borderless">
				<tbody>
				<tr>
					{this.getComponents()}
				</tr>
				</tbody>
			</table>
		);
	}
}
