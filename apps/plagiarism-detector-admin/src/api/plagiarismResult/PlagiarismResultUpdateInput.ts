import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type PlagiarismResultUpdateInput = {
  details?: string | null;
  document?: DocumentWhereUniqueInput | null;
  score?: number | null;
};
