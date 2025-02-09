import { Question } from "src/core/entities/question.entity";
import { CreateOptionDto } from "./create-option.dto";

export class CreateOptionGroupDto {
    name: string;
    description: string;
    options: CreateOptionDto[];
    question:Question[];
}