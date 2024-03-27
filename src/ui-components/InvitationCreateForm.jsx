/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createInvitation } from "../graphql/mutations";
export default function InvitationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    invitationStatus: "",
    providerId: "",
    requesterId: "",
  };
  const [invitationStatus, setInvitationStatus] = React.useState(
    initialValues.invitationStatus
  );
  const [providerId, setProviderId] = React.useState(initialValues.providerId);
  const [requesterId, setRequesterId] = React.useState(
    initialValues.requesterId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setInvitationStatus(initialValues.invitationStatus);
    setProviderId(initialValues.providerId);
    setRequesterId(initialValues.requesterId);
    setErrors({});
  };
  const validations = {
    invitationStatus: [],
    providerId: [{ type: "Required" }],
    requesterId: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          invitationStatus,
          providerId,
          requesterId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createInvitation.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InvitationCreateForm")}
      {...rest}
    >
      <SelectField
        label="Invitation status"
        placeholder="Please select an option"
        isDisabled={false}
        value={invitationStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              invitationStatus: value,
              providerId,
              requesterId,
            };
            const result = onChange(modelFields);
            value = result?.invitationStatus ?? value;
          }
          if (errors.invitationStatus?.hasError) {
            runValidationTasks("invitationStatus", value);
          }
          setInvitationStatus(value);
        }}
        onBlur={() => runValidationTasks("invitationStatus", invitationStatus)}
        errorMessage={errors.invitationStatus?.errorMessage}
        hasError={errors.invitationStatus?.hasError}
        {...getOverrideProps(overrides, "invitationStatus")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "invitationStatusoption0")}
        ></option>
        <option
          children="Declined"
          value="DECLINED"
          {...getOverrideProps(overrides, "invitationStatusoption1")}
        ></option>
        <option
          children="Approved"
          value="APPROVED"
          {...getOverrideProps(overrides, "invitationStatusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Provider id"
        isRequired={true}
        isReadOnly={false}
        value={providerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              invitationStatus,
              providerId: value,
              requesterId,
            };
            const result = onChange(modelFields);
            value = result?.providerId ?? value;
          }
          if (errors.providerId?.hasError) {
            runValidationTasks("providerId", value);
          }
          setProviderId(value);
        }}
        onBlur={() => runValidationTasks("providerId", providerId)}
        errorMessage={errors.providerId?.errorMessage}
        hasError={errors.providerId?.hasError}
        {...getOverrideProps(overrides, "providerId")}
      ></TextField>
      <TextField
        label="Requester id"
        isRequired={true}
        isReadOnly={false}
        value={requesterId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              invitationStatus,
              providerId,
              requesterId: value,
            };
            const result = onChange(modelFields);
            value = result?.requesterId ?? value;
          }
          if (errors.requesterId?.hasError) {
            runValidationTasks("requesterId", value);
          }
          setRequesterId(value);
        }}
        onBlur={() => runValidationTasks("requesterId", requesterId)}
        errorMessage={errors.requesterId?.errorMessage}
        hasError={errors.requesterId?.hasError}
        {...getOverrideProps(overrides, "requesterId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
