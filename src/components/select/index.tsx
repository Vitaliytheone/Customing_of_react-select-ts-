import Select, { StylesConfig } from "react-select";
import { customStyles } from "./styles";
import { TSelectProps } from "./type";

const SelectCustom = ({ options }: TSelectProps) => {
    return <Select options={options} isError={false} styles={customStyles as StylesConfig<any>} />;
};

export default SelectCustom;
