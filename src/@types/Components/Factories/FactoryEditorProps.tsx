import {FactoryData} from "../../../Structures/FactoryData";
import {ModalComponentProps} from "../Wrappers/Modals/ModalComponentProps";

export type FactoryEditorProps = ModalComponentProps & {
	factory: FactoryData;
	onCloseEditor: () => void;
}
