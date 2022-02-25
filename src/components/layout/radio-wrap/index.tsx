import styled from "styled-components";

type TRadioWrap = {
    children: React.ReactNode;
};

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 28px;
`;

const RadioWrap = ({ children }: TRadioWrap) => {
    return <Wrap>{children}</Wrap>;
};

export default RadioWrap;
