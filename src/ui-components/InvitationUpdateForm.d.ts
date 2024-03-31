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
export declare type InvitationUpdateFormInputValues = {
    invitationStatus?: string;
    providerId?: string;
    requesterId?: string;
};
export declare type InvitationUpdateFormValidationValues = {
    invitationStatus?: ValidationFunction<string>;
    providerId?: ValidationFunction<string>;
    requesterId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InvitationUpdateFormOverridesProps = {
    InvitationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    invitationStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    providerId?: PrimitiveOverrideProps<TextFieldProps>;
    requesterId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvitationUpdateFormProps = React.PropsWithChildren<{
    overrides?: InvitationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    invitation?: any;
    onSubmit?: (fields: InvitationUpdateFormInputValues) => InvitationUpdateFormInputValues;
    onSuccess?: (fields: InvitationUpdateFormInputValues) => void;
    onError?: (fields: InvitationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InvitationUpdateFormInputValues) => InvitationUpdateFormInputValues;
    onValidate?: InvitationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InvitationUpdateForm(props: InvitationUpdateFormProps): React.ReactElement;
