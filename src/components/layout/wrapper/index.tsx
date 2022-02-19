import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 16px;
    max-width: 360px;
`;

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }: any) => {
    return <Wrap>{children}</Wrap>;
};

export default Wrapper;
