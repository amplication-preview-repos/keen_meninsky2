import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlagiarismResultListRelationFilter } from "../plagiarismResult/PlagiarismResultListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  fileContent?: JsonFilter;
  fileName?: StringNullableFilter;
  fileType?: StringNullableFilter;
  id?: StringFilter;
  plagiarismResults?: PlagiarismResultListRelationFilter;
  user?: UserWhereUniqueInput;
};
