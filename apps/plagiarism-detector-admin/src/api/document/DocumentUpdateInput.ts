import { InputJsonValue } from "../../types";
import { PlagiarismResultUpdateManyWithoutDocumentsInput } from "./PlagiarismResultUpdateManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  fileContent?: InputJsonValue;
  fileName?: string | null;
  fileType?: string | null;
  plagiarismResults?: PlagiarismResultUpdateManyWithoutDocumentsInput;
  user?: UserWhereUniqueInput | null;
};
