import { CreateOptionDto } from "../option/create-option.dto";
import { CreateQuestionDto } from "./create-question.dto";

export class CreateAnswerDto {
    question:CreateQuestionDto;
    option:CreateOptionDto;
}