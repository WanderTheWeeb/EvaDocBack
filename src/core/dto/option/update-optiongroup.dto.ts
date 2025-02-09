import { PartialType } from "@nestjs/mapped-types";
import { CreateOptionGroupDto } from "./create-optiongroup.dto";

export class UpdateOptionGroupDto extends PartialType(CreateOptionGroupDto) {}