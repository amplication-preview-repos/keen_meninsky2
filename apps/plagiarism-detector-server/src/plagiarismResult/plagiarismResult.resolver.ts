import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlagiarismResultResolverBase } from "./base/plagiarismResult.resolver.base";
import { PlagiarismResult } from "./base/PlagiarismResult";
import { PlagiarismResultService } from "./plagiarismResult.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlagiarismResult)
export class PlagiarismResultResolver extends PlagiarismResultResolverBase {
  constructor(
    protected readonly service: PlagiarismResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
