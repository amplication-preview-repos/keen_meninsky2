import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";

export const PlagiarismResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
