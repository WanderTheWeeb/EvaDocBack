import { CreateSurveyDto } from '../survey/create-survey.dto';

export class CreatePeriodDto {
  name: string;
  survey: CreateSurveyDto;
}
