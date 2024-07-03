import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type PlagiarismResultCreateInput = {
  details?: string | null;
  document?: DocumentWhereUniqueInput | null;
  score?: number | null;
};
