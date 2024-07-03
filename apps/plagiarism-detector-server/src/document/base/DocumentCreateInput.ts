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
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { PlagiarismResultCreateNestedManyWithoutDocumentsInput } from "./PlagiarismResultCreateNestedManyWithoutDocumentsInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class DocumentCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  fileContent?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileType?: string | null;

  @ApiProperty({
    required: false,
    type: () => PlagiarismResultCreateNestedManyWithoutDocumentsInput,
  })
  @ValidateNested()
  @Type(() => PlagiarismResultCreateNestedManyWithoutDocumentsInput)
  @IsOptional()
  @Field(() => PlagiarismResultCreateNestedManyWithoutDocumentsInput, {
    nullable: true,
  })
  plagiarismResults?: PlagiarismResultCreateNestedManyWithoutDocumentsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { DocumentCreateInput as DocumentCreateInput };
