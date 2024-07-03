/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlagiarismResultWhereInput } from "./PlagiarismResultWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlagiarismResultListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlagiarismResultWhereInput,
  })
  @ValidateNested()
  @Type(() => PlagiarismResultWhereInput)
  @IsOptional()
  @Field(() => PlagiarismResultWhereInput, {
    nullable: true,
  })
  every?: PlagiarismResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlagiarismResultWhereInput,
  })
  @ValidateNested()
  @Type(() => PlagiarismResultWhereInput)
  @IsOptional()
  @Field(() => PlagiarismResultWhereInput, {
    nullable: true,
  })
  some?: PlagiarismResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlagiarismResultWhereInput,
  })
  @ValidateNested()
  @Type(() => PlagiarismResultWhereInput)
  @IsOptional()
  @Field(() => PlagiarismResultWhereInput, {
    nullable: true,
  })
  none?: PlagiarismResultWhereInput;
}
export { PlagiarismResultListRelationFilter as PlagiarismResultListRelationFilter };
