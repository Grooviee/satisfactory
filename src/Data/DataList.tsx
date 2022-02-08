import {Buildings} from "./Buildings";
import {Recipes} from "./Recipes";
import React from "react";
import {RecipeList} from "../@types/Data/Recipes/RecipeList";
import {Recipe} from "../@types/Data/Recipes/Recipe";
import {BuildingList} from "../@types/Data/BuildingList";
import {BuildingDef} from "../@types/Data/BuildingDef";
import {Resources} from "../@types/Data/Recipes/Resources";

export class Data {
	public buildings: BuildingList;
	public recipes: RecipeList;

	constructor() {
		this.buildings = Buildings;
		this.recipes = Recipes;
	}

	getBuilding(index: string): BuildingDef {
		for (const [key, value] of Object.entries(this.buildings)) {
			if (key === index) {
				return value;
			}
		}

		throw new Error("Building with named index `" + index + "` was not found.")
	}

	getRecipe(name: string): Recipe {
		let groups = Object.values(this.recipes);
		for (let i = 0; i < groups.length; i++) {
			let group = groups[i];

			for (const [recipeName, recipe] of Object.entries(group)) {
				if (recipeName === name) {
					return recipe;
				}
			}
		}

		throw new Error("Recipe with named index `" + name + "` was not found.");
	}

	getRecipesByBuilding(buildingType: string): { [namedIndex: string]: Recipe } | null {
		for (const [groupName, recipes] of Object.entries(this.recipes)) {
			if (groupName !== buildingType) continue;

			return recipes;
		}

		return null;
	}

	getRecipesOptions(buildingType: string): JSX.Element[] {
		let options: JSX.Element[] = [];
		options.push(<option key={0}/>);

		let recipes = this.getRecipesByBuilding(buildingType);
		if (recipes === null) return options;

		for (const [index, recipe] of Object.entries(recipes)) {
			options.push(<option key={index} value={index}>{recipe.name}</option>);
		}

		return options;
	}

	getRecipeIconName(name: string): string {
		let recipe = this.getRecipe(name);
		return recipe.icon ? recipe.icon : "";
	}

	getRecipeIcon(name: string, size: number = 24, paddingClass: string = "pe-2"): JSX.Element {
		try {
			let img = "img/" + DataList.getRecipeIconName(name) + ".png";
			return (<img src={img} alt={name} height={size} className={paddingClass}/>);
		} catch (e) {
			return <></>;
		}
	}

	getBuildingIcon(name: string, size: number = 24, paddingClass: string = "pe-2"): JSX.Element {
		let img = "img/" + name + ".png";
		return (<img src={img} alt={name} height={size} className={paddingClass}/>);
	}

	getBuildingsSortedByName(): { index: string, def: BuildingDef }[] {
		let sortable = [];
		for (let index in this.buildings) {
			if (this.buildings.hasOwnProperty(index)) {
				sortable.push({index: index, def: this.buildings[index]});
			}
		}

		sortable.sort((a, b): number => {
			return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
		});

		return sortable;
	}

	sortRecipes(recipes: { [namedIndex: string]: Recipe }): { index: string, recipe: Recipe }[] {
		let sortable = [];
		for (let index in recipes) {
			if (recipes.hasOwnProperty(index)) {
				sortable.push({index: index, recipe: recipes[index]});
			}
		}

		sortable.sort((a, b): number => {
			return a.recipe.name < b.recipe.name ? -1 : a.recipe.name > b.recipe.name ? 1 : 0;
		});

		return sortable;
	}

	getRecipeResources(resources: Resources | undefined, textColor: string): JSX.Element[] {
		let resourceArray: JSX.Element[] = [];
		if(typeof resources === "undefined") return resourceArray;

		let className = "d-block " + textColor;
		for(const [index, number] of Object.entries(resources)) {
			resourceArray.push(
				<div className={className}>
					{this.getRecipeIcon(index)}
					{number} / min
				</div>
			);
		}

		return resourceArray;
	}
}

export const DataList = new Data();
