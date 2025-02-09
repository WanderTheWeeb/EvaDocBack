import { PartialType } from "@nestjs/mapped-types";
import { CreatePeriodDto } from "./create-period.dto";

export class UpdatePeriodDTO extends PartialType(CreatePeriodDto) {}