import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlagiarismResultServiceBase } from "./base/plagiarismResult.service.base";

@Injectable()
export class PlagiarismResultService extends PlagiarismResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
