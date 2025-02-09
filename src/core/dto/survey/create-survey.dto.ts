import { CreatePeriodDto } from '../professor/create-period.dto';
import { CreateProfessorDto } from '../professor/create-professor.dto';
import { CreateQuestionDto } from '../question/create-question.dto';

export class CreateSurveyDto {
  title: string;
  professors: CreateProfessorDto[];
  questions: CreateQuestionDto[];
  period: CreatePeriodDto[];
}
