import { CreateOptionGroupDto } from "../option/create-optiongroup.dto";
import { CreateAnswerDto } from "./create-answer.dto";

export class CreateQuestionDto {
    text: string;
    surveyId: string;
    optionGroup:CreateOptionGroupDto;
    answer:CreateAnswerDto;
}