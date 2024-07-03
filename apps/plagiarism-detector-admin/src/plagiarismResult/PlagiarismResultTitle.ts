import { PlagiarismResult as TPlagiarismResult } from "../api/plagiarismResult/PlagiarismResult";

export const PLAGIARISMRESULT_TITLE_FIELD = "id";

export const PlagiarismResultTitle = (record: TPlagiarismResult): string => {
  return record.id?.toString() || String(record.id);
};
