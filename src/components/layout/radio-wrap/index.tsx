import React from "react";
import styled from "styled-components";
import { radioData } from "./data";

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
`;

const RadioWrap = () => {
    return (
        <Wrap>
            {radioData().map((item, idx) => {
                return <div key={idx}>{item.label}</div>;
            })}
        </Wrap>
    );
};

export default RadioWrap;
