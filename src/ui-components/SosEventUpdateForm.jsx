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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getSosEvent } from "../graphql/queries";
import { updateSosEvent } from "../graphql/mutations";
export default function SosEventUpdateForm(props) {
  const {
    id: idProp,
    sosEvent: sosEventModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    status: "",
    requesterId: "",
    place: "",
  };
  const [status, setStatus] = React.useState(initialValues.status);
  const [requesterId, setRequesterId] = React.useState(
    initialValues.requesterId
  );
  const [place, setPlace] = React.useState(initialValues.place);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sosEventRecord
      ? { ...initialValues, ...sosEventRecord }
      : initialValues;
    setStatus(cleanValues.status);
    setRequesterId(cleanValues.requesterId);
    setPlace(
      typeof cleanValues.place === "string" || cleanValues.place === null
        ? cleanValues.place
        : JSON.stringify(cleanValues.place)
    );
    setErrors({});
  };
  const [sosEventRecord, setSosEventRecord] = React.useState(sosEventModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getSosEvent.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSosEvent
        : sosEventModelProp;
      setSosEventRecord(record);
    };
    queryData();
  }, [idProp, sosEventModelProp]);
  React.useEffect(resetStateValues, [sosEventRecord]);
  const validations = {
    status: [{ type: "Required" }],
    requesterId: [{ type: "Required" }],
    place: [{ type: "JSON" }],
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
          status,
          requesterId,
          place: place ?? null,
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
            query: updateSosEvent.replaceAll("__typename", ""),
            variables: {
              input: {
                id: sosEventRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SosEventUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status: value,
              requesterId,
              place,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Finished"
          value="FINISHED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Requester id"
        isRequired={true}
        isReadOnly={false}
        value={requesterId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              requesterId: value,
              place,
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
      <TextAreaField
        label="Place"
        isRequired={false}
        isReadOnly={false}
        value={place}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              requesterId,
              place: value,
            };
            const result = onChange(modelFields);
            value = result?.place ?? value;
          }
          if (errors.place?.hasError) {
            runValidationTasks("place", value);
          }
          setPlace(value);
        }}
        onBlur={() => runValidationTasks("place", place)}
        errorMessage={errors.place?.errorMessage}
        hasError={errors.place?.hasError}
        {...getOverrideProps(overrides, "place")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || sosEventModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || sosEventModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
