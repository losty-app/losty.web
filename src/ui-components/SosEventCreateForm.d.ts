/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SosEventCreateFormInputValues = {
    status?: string;
    requesterId?: string;
    place?: string;
};
export declare type SosEventCreateFormValidationValues = {
    status?: ValidationFunction<string>;
    requesterId?: ValidationFunction<string>;
    place?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SosEventCreateFormOverridesProps = {
    SosEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    requesterId?: PrimitiveOverrideProps<TextFieldProps>;
    place?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type SosEventCreateFormProps = React.PropsWithChildren<{
    overrides?: SosEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SosEventCreateFormInputValues) => SosEventCreateFormInputValues;
    onSuccess?: (fields: SosEventCreateFormInputValues) => void;
    onError?: (fields: SosEventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SosEventCreateFormInputValues) => SosEventCreateFormInputValues;
    onValidate?: SosEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function SosEventCreateForm(props: SosEventCreateFormProps): React.ReactElement;
