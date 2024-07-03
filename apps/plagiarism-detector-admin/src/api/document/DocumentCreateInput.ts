import { InputJsonValue } from "../../types";
import { PlagiarismResultCreateNestedManyWithoutDocumentsInput } from "./PlagiarismResultCreateNestedManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  fileContent?: InputJsonValue;
  fileName?: string | null;
  fileType?: string | null;
  plagiarismResults?: PlagiarismResultCreateNestedManyWithoutDocumentsInput;
  user?: UserWhereUniqueInput | null;
};
