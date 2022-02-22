import { GroupBase, Props } from "react-select";

declare module "react-select/dist/declarations/src/Select" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
        isError: boolean;
    }
}

export type TOption = {
    value: any;
    label: string;
};

export type TSelectProps = Partial<Props> & {
    id?: string;
    className?: string;
    options?: TOption[];
    disabled?: boolean;
    defaultValue?: TOption;
    label?: string;
    error?: boolean;
    errorText?: string;
    width?: string;
    maxWidth?: string;
};