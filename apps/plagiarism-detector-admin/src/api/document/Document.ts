import { JsonValue } from "type-fest";
import { PlagiarismResult } from "../plagiarismResult/PlagiarismResult";
import { User } from "../user/User";

export type Document = {
  createdAt: Date;
  fileContent: JsonValue;
  fileName: string | null;
  fileType: string | null;
  id: string;
  plagiarismResults?: Array<PlagiarismResult>;
  updatedAt: Date;
  user?: User | null;
};
