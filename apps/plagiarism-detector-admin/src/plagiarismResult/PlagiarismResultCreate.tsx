import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";

export const PlagiarismResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="details" multiline source="details" />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <NumberInput label="score" source="score" />
      </SimpleForm>
    </Create>
  );
};
