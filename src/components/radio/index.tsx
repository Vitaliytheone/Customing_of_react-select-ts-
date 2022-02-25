import React, { memo, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { RadioLabel, RadioLabelText, RadioWrapper } from "./theme";

type TRadioProps = {
    label?: React.ReactNode;
    error?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Radio = ({ id, error, label, disabled = false, checked = false, className, onChange, ...props }: TRadioProps) => {
    const selectRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        onChange && onChange(e);
    };

    return (
        <RadioWrapper className={className}>
            <input {...props} type="radio" checked={checked} onChange={selectRadio} disabled={disabled} id={id} />
            <RadioLabel htmlFor={id} error={error}>
                <RadioLabelText>{label}</RadioLabelText>
            </RadioLabel>
        </RadioWrapper>
    );
};

export default memo(Radio);
