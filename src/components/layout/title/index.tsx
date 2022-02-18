import React from "react";
import styled from "styled-components";

const Wrap = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Wrap>{children}</Wrap>;
};

export default Title;
