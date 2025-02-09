import { CreateSurveyDto } from "../survey/create-survey.dto";

export class CreateProfessorDto {
    noPersonal: string;
    name: string;
    fisrtLastName: string;
    secondLastName: string;
    survey: CreateSurveyDto;
}
