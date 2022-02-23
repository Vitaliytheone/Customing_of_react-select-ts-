import React from "react";
import { Layout, Select } from "./components";

const { Wrapper, RadioWrap, Title } = Layout;

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

function App() {
    return (
        <Wrapper>
            <Title>Custom React-Select component</Title>
            <Select options={options} />
            <RadioWrap />
        </Wrapper>
    );
}

export default App;
