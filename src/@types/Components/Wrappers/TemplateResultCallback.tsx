import {DataState} from "./DataState";
import {TemplateResult} from "./TemplateResult";

export type TemplateResultCallback = {
	(state: DataState): TemplateResult
};
