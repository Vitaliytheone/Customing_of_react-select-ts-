import React from "react";
import styled from "styled-components";

const Wrap = styled.h1`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Wrap>{children}</Wrap>;
};

export default Title;
