import { useState, useCallback } from "react";
import { Layout, Radio, Select } from "./components";
import { selectOptions, radioData, errorText } from "./data";

const { Wrapper, RadioWrap, Title } = Layout;

function App() {
    const [variant, setVariant] = useState(1);

    const onChange = useCallback((e) => {
        setVariant(Number(e.target.dataset.variant));
    }, []);

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
                {radioData.map((item, idx) => {
                    const { label, value } = item;
                    return (
                        <Radio
                            id={label}
                            key={idx}
                            label={label}
                            checked={variant === value}
                            onChange={onChange}
                            data-variant={value}
                        />
                    );
                })}
            </RadioWrap>
        </Wrapper>
    );
}

export default App;
