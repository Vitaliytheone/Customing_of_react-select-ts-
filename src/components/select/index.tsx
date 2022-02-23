import Select, { StylesConfig } from "react-select";
import { ErrorText, Label, Wrapper } from "./components";
import { customStyles } from "./styles";
import { TSelectProps } from "./type";

const SelectCustom = ({
    id,
    className,
    options,
    placeholder,
    disabled,
    defaultValue,
    label,
    errorText,
    width,
    maxWidth,
    error = false,
    isSearchable = false,
    ...rest
}: TSelectProps) => {
    return (
        <Wrapper id={id} className={className} width={width} maxWidth={maxWidth} isError={error} isDisabled={disabled}>
            {label && <Label>{label}</Label>}
            <Select
                {...rest}
                isError={error}
                placeholder={placeholder ?? ""}
                options={options}
                isSearchable={isSearchable}
                defaultValue={defaultValue}
                isDisabled={disabled}
                noOptionsMessage={() => "Empty"}
                components={{
                    IndicatorSeparator: null,
                }}
                styles={customStyles as StylesConfig<any>}
            />
            {errorText && <ErrorText>{errorText}</ErrorText>}
        </Wrapper>
    );
};

export default SelectCustom;
