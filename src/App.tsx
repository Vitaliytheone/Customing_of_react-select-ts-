import { useState } from "react";
import { Layout, Radio, Select } from "./components";
import { selectOptions, radioData, errorText } from "./data";

const { Wrapper, RadioWrap, Title } = Layout;

function App() {
    const [variant, setVariant] = useState(1);
    const onChange = (value: number) => () => {
        setVariant(value);
    };
    return (
        <Wrapper>
            <Title>Custom React-Select component</Title>
            <Select
                label="Tasty select"
                placeholder="Select me..."
                error={variant === 2}
                disabled={variant === 3}
                errorText={errorText}
                options={selectOptions}
            />
            <RadioWrap>
                {radioData().map((item, idx) => {
                    const { label, value } = item;
                    return (
                        <Radio
                            id={String(idx)}
                            key={idx}
                            label={label}
                            checked={variant === value}
                            onChange={onChange(value)}
                        />
                    );
                })}
            </RadioWrap>
        </Wrapper>
    );
}

export default App;
