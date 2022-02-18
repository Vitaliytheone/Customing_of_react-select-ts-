import React from "react";
import { Layout, Select } from "./components";

const { Wrapper, RadioWrap, Title } = Layout;

function App() {
    return (
        <Wrapper>
            <Title>Custom React-Select component</Title>
            <Select />
            <RadioWrap />
        </Wrapper>
    );
}

export default App;
