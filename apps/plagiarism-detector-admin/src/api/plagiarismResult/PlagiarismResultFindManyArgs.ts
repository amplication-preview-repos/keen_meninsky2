import { PlagiarismResultWhereInput } from "./PlagiarismResultWhereInput";
import { PlagiarismResultOrderByInput } from "./PlagiarismResultOrderByInput";

export type PlagiarismResultFindManyArgs = {
  where?: PlagiarismResultWhereInput;
  orderBy?: Array<PlagiarismResultOrderByInput>;
  skip?: number;
  take?: number;
};
