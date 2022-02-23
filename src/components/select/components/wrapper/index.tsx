import { PropsWithChildren } from "react";
import styled from "styled-components";
import { BLACK, RED, disableStyle } from "../../../../assets/tokens";

type TWrapper = {
    id?: string;
    className?: string;
    isError?: boolean;
    isDisabled?: boolean;
    width?: string;
    maxWidth?: string;
};

const WrapperStyled = styled.div<{ $isError: boolean; $isDisabled: boolean; $width: string; $maxWidth: string }>`
    width: ${({ $width }) => $width};
    max-width: ${({ $maxWidth }) => $maxWidth};
    color: ${({ $isError }) => ($isError ? RED : BLACK)};
    ${({ $isDisabled }) => $isDisabled && disableStyle};
`;

const Wrapper = ({
    id,
    className,
    isError = false,
    isDisabled = false,
    width = "100%",
    maxWidth = "100%",
    children,
}: PropsWithChildren<TWrapper>) => {
    return (
        <WrapperStyled
            id={id}
            className={className}
            $isError={isError}
            $isDisabled={isDisabled}
            $width={width}
            $maxWidth={maxWidth}
        >
            {children}
        </WrapperStyled>
    );
};

export default Wrapper;
