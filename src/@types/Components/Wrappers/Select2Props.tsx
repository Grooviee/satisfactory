import {TemplateResultCallback} from "./TemplateResultCallback";

export type Select2Props = {
	className: string;
	placeholder: string;
	options: JSX.Element[];
	defaultValue?: string | number | readonly string[] | undefined;
	onChange: (value: string) => void;
	templateResult?: TemplateResultCallback;
	onChangeReset?: boolean;
}
