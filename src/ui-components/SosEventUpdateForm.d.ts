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
export declare type SosEventUpdateFormInputValues = {
    status?: string;
    requesterId?: string;
    place?: string;
};
export declare type SosEventUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
    requesterId?: ValidationFunction<string>;
    place?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SosEventUpdateFormOverridesProps = {
    SosEventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    requesterId?: PrimitiveOverrideProps<TextFieldProps>;
    place?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type SosEventUpdateFormProps = React.PropsWithChildren<{
    overrides?: SosEventUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sosEvent?: any;
    onSubmit?: (fields: SosEventUpdateFormInputValues) => SosEventUpdateFormInputValues;
    onSuccess?: (fields: SosEventUpdateFormInputValues) => void;
    onError?: (fields: SosEventUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SosEventUpdateFormInputValues) => SosEventUpdateFormInputValues;
    onValidate?: SosEventUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SosEventUpdateForm(props: SosEventUpdateFormProps): React.ReactElement;
