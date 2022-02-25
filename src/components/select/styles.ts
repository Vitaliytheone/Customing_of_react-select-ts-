import { GREY, PURPLE, RED, BLACK, WHITE } from './../../assets/tokens';
import { StylesConfig } from "react-select";
import { TOption } from "./type";

export const getHoverColor = (isError: boolean) => {
    if (isError) return RED;
    return PURPLE;
};

export const getColor = (isActive: boolean, isError: boolean) => {
    if (isError) return RED;
    if (isActive) return PURPLE;

    return GREY;
};

export const customStyles: StylesConfig<TOption, false> = {
    control: (provided, state) => {
        const { isFocused, isDisabled, selectProps } = state;
        return {
            ...provided,
            fontSize: "16px",
            fontWeight: 500,
            width: "100%",
            height: "40px",
            borderRadius: "8px",
            backgroundColor: WHITE,
            border: `1px solid ${getColor(isFocused, selectProps.isError)}`,
            color: "inherit",
            boxShadow: "none",
            "&:hover": {
                borderColor: getHoverColor(selectProps.isError),
            },
            pointerEvents: isDisabled ? "none" : "initial",
            opacity: isDisabled ? "0.4" : "1",
        };
    },
    placeholder: (provided) => {
        return {
            ...provided,
            color: GREY,
            fontWeight: "normal",
        };
    },
    menu: (provided) => {
        return {
            ...provided,
            borderRadius: "8px",
            boxShadow: "none",
            border: `1px solid ${GREY}`,
            backgroundColor: WHITE,
            overflow: "hidden",
            marginTop: "4px",
            zIndex: 999,
        };
    },
    menuList: (provided) => {
        return {
            ...provided,
            padding: `0 8px`,
        };
    },
    option: (provided, state) => {
        const { isFocused, isSelected } = state;
        return {
            ...provided,
            fontSize: "16px",
            fontWeight: 500,
            padding: "8px",
            margin: `8px 0`,
            borderRadius: "4px",
            color: isSelected || isFocused ? PURPLE : BLACK,
            backgroundColor: isFocused ? "#F0F2F5" : WHITE,
        };
    },
    singleValue: (provided) => {
        return {
            ...provided,
            color: "inherit",
        };
    },
    dropdownIndicator: (provided, state) => {
        const { isFocused, selectProps } = state;
        return {
            ...provided,
            color: getColor(isFocused, selectProps.isError),
        };
    },
};