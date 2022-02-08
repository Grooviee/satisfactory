import {Resources} from "./Resources";

export type Recipe = {
	name: string;
	icon?: string;
	products?: Resources;
	ingredients?: Resources;
}
