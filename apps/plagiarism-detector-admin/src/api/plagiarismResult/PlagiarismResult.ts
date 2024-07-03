import { Document } from "../document/Document";

export type PlagiarismResult = {
  createdAt: Date;
  details: string | null;
  document?: Document | null;
  id: string;
  score: number | null;
  updatedAt: Date;
};
