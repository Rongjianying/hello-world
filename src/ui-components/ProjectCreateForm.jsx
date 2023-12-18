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
import { generateClient } from "aws-amplify/api";
import { createProject } from "../graphql/mutations";
const client = generateClient();
export default function ProjectCreateForm(props) {
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
    name: "",
    description: "",
    platform: "",
    status: "",
    published_date: "",
    expirated_date: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [platform, setPlatform] = React.useState(initialValues.platform);
  const [status, setStatus] = React.useState(initialValues.status);
  const [published_date, setPublished_date] = React.useState(
    initialValues.published_date
  );
  const [expirated_date, setExpirated_date] = React.useState(
    initialValues.expirated_date
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setPlatform(initialValues.platform);
    setStatus(initialValues.status);
    setPublished_date(initialValues.published_date);
    setExpirated_date(initialValues.expirated_date);
    setErrors({});
  };
  const validations = {
    name: [],
    description: [],
    platform: [],
    status: [],
    published_date: [],
    expirated_date: [],
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
          name,
          description,
          platform,
          status,
          published_date,
          expirated_date,
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
          await client.graphql({
            query: createProject.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ProjectCreateForm")}
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
              description,
              platform,
              status,
              published_date,
              expirated_date,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              platform,
              status,
              published_date,
              expirated_date,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SelectField
        label="Platform"
        placeholder="Please select an option"
        isDisabled={false}
        value={platform}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              platform: value,
              status,
              published_date,
              expirated_date,
            };
            const result = onChange(modelFields);
            value = result?.platform ?? value;
          }
          if (errors.platform?.hasError) {
            runValidationTasks("platform", value);
          }
          setPlatform(value);
        }}
        onBlur={() => runValidationTasks("platform", platform)}
        errorMessage={errors.platform?.errorMessage}
        hasError={errors.platform?.hasError}
        {...getOverrideProps(overrides, "platform")}
      >
        <option
          children="Tvp"
          value="TVP"
          {...getOverrideProps(overrides, "platformoption0")}
        ></option>
        <option
          children="Strata"
          value="STRATA"
          {...getOverrideProps(overrides, "platformoption1")}
        ></option>
        <option
          children="Beeswex"
          value="BEESWEX"
          {...getOverrideProps(overrides, "platformoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              platform,
              status: value,
              published_date,
              expirated_date,
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
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Inactive"
          value="INACTIVE"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Published date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={published_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              platform,
              status,
              published_date: value,
              expirated_date,
            };
            const result = onChange(modelFields);
            value = result?.published_date ?? value;
          }
          if (errors.published_date?.hasError) {
            runValidationTasks("published_date", value);
          }
          setPublished_date(value);
        }}
        onBlur={() => runValidationTasks("published_date", published_date)}
        errorMessage={errors.published_date?.errorMessage}
        hasError={errors.published_date?.hasError}
        {...getOverrideProps(overrides, "published_date")}
      ></TextField>
      <TextField
        label="Expirated date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={expirated_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              platform,
              status,
              published_date,
              expirated_date: value,
            };
            const result = onChange(modelFields);
            value = result?.expirated_date ?? value;
          }
          if (errors.expirated_date?.hasError) {
            runValidationTasks("expirated_date", value);
          }
          setExpirated_date(value);
        }}
        onBlur={() => runValidationTasks("expirated_date", expirated_date)}
        errorMessage={errors.expirated_date?.errorMessage}
        hasError={errors.expirated_date?.hasError}
        {...getOverrideProps(overrides, "expirated_date")}
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
