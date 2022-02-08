import {Component, createRef, RefObject} from "react";
import {Select2Props} from "../../@types/Components/Wrappers/Select2Props";
import {TemplateResultCallback} from "../../@types/Components/Wrappers/TemplateResultCallback";

/**
 * Wrapper for Select2 component.
 */
export class Select2 extends Component<Select2Props> {
	inputRef: RefObject<any>;
	onChangeReset: boolean;

	constructor(props: Select2Props) {
		super(props);

		this.inputRef = createRef();

		this.onChangeReset = typeof props.onChangeReset !== "undefined" ? props.onChangeReset : false;
	}

	private getTemplateResultFunction(): TemplateResultCallback {
		if(this.props.templateResult) return this.props.templateResult;

		return function(state: any): any {
			return state.text;
		}
	}

	componentDidMount(): void {
		$(this.inputRef.current).select2({
			templateResult: this.getTemplateResultFunction(),
			placeholder: this.props.placeholder,
			sorter: (data) => {
				return data.sort((a, b): number => {
					return a.text < b.text ? -1 : a.text > b.text ? 1 : 0;
				});
			}
		}).on("change", (event) => {
			let target = $(event.currentTarget);
			let value = target.val();
			if(!value) return;

			let zeroCheck = parseInt(value.toString());
			if(this.onChangeReset && zeroCheck === 0) return;

			this.props.onChange(value.toString());

			if(this.onChangeReset) {
				target.val(0).trigger("change");
			}
		});
	}

	componentWillUnmount(): void {
		$(this.inputRef.current).select2("destroy");
	}

	render(): JSX.Element {
		return (
			<select className={this.props.className} defaultValue={this.props.defaultValue} ref={this.inputRef}>
				{this.props.options}
			</select>
		);
	}
}
