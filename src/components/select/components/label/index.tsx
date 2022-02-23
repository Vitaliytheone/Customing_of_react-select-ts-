import styled from "styled-components";

type TLabel = {
    children: string;
};

const LabelStyled = styled.label`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
    display: inline-block;
    color: inherit;
`;

const Label = ({ children }: TLabel) => {
    return <LabelStyled>{children}</LabelStyled>;
};

export default Label;
