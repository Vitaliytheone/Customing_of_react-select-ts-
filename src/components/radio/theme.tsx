import styled from "styled-components";
import { GREY, GREY_LIGHT, PRIMARY_BLUE, RED, WHITE } from "../../assets/tokens";

export const getColor = (isError?: boolean) => {
    if (isError) return RED;
    return GREY;
};

export const RadioWrapper = styled.label`
    margin-right: 12px;
    position: relative;
    display: block;
    input[type="radio"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    input[type="radio"]:checked + label > span:before {
        transform: scale(1, 1);
    }

    input[type="radio"]:checked + label:after {
        background-color: ${WHITE};
        border-radius: 50%;
        border: 1px solid ${PRIMARY_BLUE};
    }

    input[type="radio"]:disabled + label {
        opacity: 0.3;
        cursor: default;
        background-color: ${WHITE};
        border: 1px solid ${GREY_LIGHT};
        &:hover {
            box-shadow: unset;
            border-radius: unset;
        }
    }
`;

export const RadioLabel = styled.label<{ error?: boolean }>`
    user-select: none;
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 26px;
    font-size: 16px;

    &:after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        border: 1px solid ${(props) => getColor(props.error)};
        border-radius: 50%;
        background-color: ${WHITE};
        top: 0;
        left: 0;
        transition: 0.2s;
    }
`;

export const RadioLabelText = styled.span`
    &:before {
        content: "";
        transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
        display: block;
        width: 12px;
        height: 12px;
        left: 5px;
        top: 5px;
        position: absolute;
        background-color: ${PRIMARY_BLUE};
        border-radius: 50%;
        transform: scale(0, 0);
        z-index: 1;
    }
    font-size: 16px;
    height: 20px;
`;
