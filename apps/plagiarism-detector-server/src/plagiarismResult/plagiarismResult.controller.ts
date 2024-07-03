import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlagiarismResultService } from "./plagiarismResult.service";
import { PlagiarismResultControllerBase } from "./base/plagiarismResult.controller.base";

@swagger.ApiTags("plagiarismResults")
@common.Controller("plagiarismResults")
export class PlagiarismResultController extends PlagiarismResultControllerBase {
  constructor(
    protected readonly service: PlagiarismResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
