import React from "react";
import { Layout, Radio, Select } from "./components";
import { selectOptions, radioData } from "./data";

const { Wrapper, RadioWrap, Title } = Layout;

function App() {
    return (
        <Wrapper>
            <Title>Custom React-Select component</Title>
            <Select label="Tasty select" placeholder="Select me..." options={selectOptions} />
            <RadioWrap>
                {radioData().map((item, idx) => {
                    return <Radio key={idx} label={item.label} checked />;
                })}
            </RadioWrap>
        </Wrapper>
    );
}

export default App;
