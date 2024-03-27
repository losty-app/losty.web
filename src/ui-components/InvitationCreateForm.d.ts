/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type InvitationCreateFormInputValues = {
    invitationStatus?: string;
    providerId?: string;
    requesterId?: string;
};
export declare type InvitationCreateFormValidationValues = {
    invitationStatus?: ValidationFunction<string>;
    providerId?: ValidationFunction<string>;
    requesterId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InvitationCreateFormOverridesProps = {
    InvitationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    invitationStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    providerId?: PrimitiveOverrideProps<TextFieldProps>;
    requesterId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvitationCreateFormProps = React.PropsWithChildren<{
    overrides?: InvitationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InvitationCreateFormInputValues) => InvitationCreateFormInputValues;
    onSuccess?: (fields: InvitationCreateFormInputValues) => void;
    onError?: (fields: InvitationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InvitationCreateFormInputValues) => InvitationCreateFormInputValues;
    onValidate?: InvitationCreateFormValidationValues;
} & React.CSSProperties>;
export default function InvitationCreateForm(props: InvitationCreateFormProps): React.ReactElement;
