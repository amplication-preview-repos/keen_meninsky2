import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PlagiarismResultWhereInput = {
  details?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  score?: FloatNullableFilter;
};
