import {Recipe} from "./Recipe";

export type RecipeList = {
	[group: string]: { [namedIndex: string]: Recipe }
}
