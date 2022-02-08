import {ModalComponentProps} from "../../Wrappers/Modals/ModalComponentProps";
import {BuildingData} from "../../../../Structures/BuildingData";

export type SelectRecipeModalProps = ModalComponentProps & {
	onRecipeSelect: (recipe: string) => void;
	defaultRecipe?: string;
	placeholder: string;
	building: BuildingData;
}
