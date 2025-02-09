import { Answer } from "src/core/entities/answer.entity";
import { OptionGroup } from "src/core/entities/option-group.entity";

export class CreateOptionDto {
  text: string;
  optionGroup:OptionGroup;
  answer: Answer[];
}