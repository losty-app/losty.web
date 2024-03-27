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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getChatRoom } from "../graphql/queries";
import { updateChatRoom } from "../graphql/mutations";
export default function ChatRoomUpdateForm(props) {
  const {
    id: idProp,
    chatRoom: chatRoomModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    uriImage: "",
    isGroup: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [uriImage, setUriImage] = React.useState(initialValues.uriImage);
  const [isGroup, setIsGroup] = React.useState(initialValues.isGroup);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = chatRoomRecord
      ? { ...initialValues, ...chatRoomRecord }
      : initialValues;
    setName(cleanValues.name);
    setUriImage(cleanValues.uriImage);
    setIsGroup(cleanValues.isGroup);
    setErrors({});
  };
  const [chatRoomRecord, setChatRoomRecord] = React.useState(chatRoomModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getChatRoom.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getChatRoom
        : chatRoomModelProp;
      setChatRoomRecord(record);
    };
    queryData();
  }, [idProp, chatRoomModelProp]);
  React.useEffect(resetStateValues, [chatRoomRecord]);
  const validations = {
    name: [],
    uriImage: [],
    isGroup: [],
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
          name: name ?? null,
          uriImage: uriImage ?? null,
          isGroup: isGroup ?? null,
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
            query: updateChatRoom.replaceAll("__typename", ""),
            variables: {
              input: {
                id: chatRoomRecord.id,
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
      {...getOverrideProps(overrides, "ChatRoomUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              uriImage,
              isGroup,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Uri image"
        isRequired={false}
        isReadOnly={false}
        value={uriImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              uriImage: value,
              isGroup,
            };
            const result = onChange(modelFields);
            value = result?.uriImage ?? value;
          }
          if (errors.uriImage?.hasError) {
            runValidationTasks("uriImage", value);
          }
          setUriImage(value);
        }}
        onBlur={() => runValidationTasks("uriImage", uriImage)}
        errorMessage={errors.uriImage?.errorMessage}
        hasError={errors.uriImage?.hasError}
        {...getOverrideProps(overrides, "uriImage")}
      ></TextField>
      <SwitchField
        label="Is group"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isGroup}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              uriImage,
              isGroup: value,
            };
            const result = onChange(modelFields);
            value = result?.isGroup ?? value;
          }
          if (errors.isGroup?.hasError) {
            runValidationTasks("isGroup", value);
          }
          setIsGroup(value);
        }}
        onBlur={() => runValidationTasks("isGroup", isGroup)}
        errorMessage={errors.isGroup?.errorMessage}
        hasError={errors.isGroup?.hasError}
        {...getOverrideProps(overrides, "isGroup")}
      ></SwitchField>
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
          isDisabled={!(idProp || chatRoomModelProp)}
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
              !(idProp || chatRoomModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
