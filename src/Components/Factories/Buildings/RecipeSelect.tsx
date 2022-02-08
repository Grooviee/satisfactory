import {Component} from "react";
import {Select2} from "../../Wrappers/Select2";
import {DataList} from "../../../Data/DataList";
import {renderToString} from "react-dom/server";
import {RecipeSelectProps} from "../../../@types/Components/Factories/Buildings/RecipeSelectProps";
import {DataState} from "../../../@types/Components/Wrappers/DataState";
import {TemplateResult} from "../../../@types/Components/Wrappers/TemplateResult";

/**
 * Component providing recipe selector.
 */
export class RecipeSelect extends Component<RecipeSelectProps> {
	constructor(props: RecipeSelectProps) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(value: string): void {
		let building = this.props.building;
		if(building.getBuildingType() === "coalGenerator") {
			building.specials = value;
		} else {
			building.recipe = value;
		}
		this.props.onBuildingChange(building);
	}

	setTemplateResult(state: DataState): TemplateResult {
		if(!state.id) {
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
		let recipeOptions = DataList.getRecipesOptions(this.props.building.getBuildingType());
		let recipe = this.props.building.getBuildingType() === "coalGenerator"
			? this.props.building.specials
			: this.props.building.recipe;

		return (
			<td>
				<span className="mb-2 d-inline-block">{this.props.label}</span>
				<Select2 className="form-control form-control-sm"
				         placeholder={this.props.placeholder}
				         options={recipeOptions}
				         onChange={this.handleOnChange}
				         defaultValue={recipe}
				         templateResult={this.setTemplateResult}/>
			</td>
		);
	}
}
