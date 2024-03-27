/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AssociationUpdateFormInputValues = {
    name?: string;
};
export declare type AssociationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssociationUpdateFormOverridesProps = {
    AssociationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssociationUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssociationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    association?: any;
    onSubmit?: (fields: AssociationUpdateFormInputValues) => AssociationUpdateFormInputValues;
    onSuccess?: (fields: AssociationUpdateFormInputValues) => void;
    onError?: (fields: AssociationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssociationUpdateFormInputValues) => AssociationUpdateFormInputValues;
    onValidate?: AssociationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssociationUpdateForm(props: AssociationUpdateFormProps): React.ReactElement;
