/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ChatRoomUpdateFormInputValues = {
    name?: string;
    uriImage?: string;
    isGroup?: boolean;
};
export declare type ChatRoomUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    uriImage?: ValidationFunction<string>;
    isGroup?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatRoomUpdateFormOverridesProps = {
    ChatRoomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    uriImage?: PrimitiveOverrideProps<TextFieldProps>;
    isGroup?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ChatRoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChatRoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chatRoom?: any;
    onSubmit?: (fields: ChatRoomUpdateFormInputValues) => ChatRoomUpdateFormInputValues;
    onSuccess?: (fields: ChatRoomUpdateFormInputValues) => void;
    onError?: (fields: ChatRoomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatRoomUpdateFormInputValues) => ChatRoomUpdateFormInputValues;
    onValidate?: ChatRoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChatRoomUpdateForm(props: ChatRoomUpdateFormProps): React.ReactElement;
