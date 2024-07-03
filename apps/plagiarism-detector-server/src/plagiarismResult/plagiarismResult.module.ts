import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlagiarismResultModuleBase } from "./base/plagiarismResult.module.base";
import { PlagiarismResultService } from "./plagiarismResult.service";
import { PlagiarismResultController } from "./plagiarismResult.controller";
import { PlagiarismResultResolver } from "./plagiarismResult.resolver";

@Module({
  imports: [PlagiarismResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlagiarismResultController],
  providers: [PlagiarismResultService, PlagiarismResultResolver],
  exports: [PlagiarismResultService],
})
export class PlagiarismResultModule {}
