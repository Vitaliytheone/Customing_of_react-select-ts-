import styled from "styled-components";
import { RED } from "../../../../assets/tokens";

type TErrorText = {
    children: string;
};

const Text = styled.span`
    position: absolute;
    color: ${RED};
`;

const ErrorText = ({ children }: TErrorText) => {
    return <Text>{children}</Text>;
};

export default ErrorText;
