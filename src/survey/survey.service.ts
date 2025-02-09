import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from 'src/core/dto/survey/create-survey.dto';
import { UpdateSurveyDto } from 'src/core/dto/survey/update-survey.dto';

@Injectable()
export class SurveyService {
  create(createSurveyDto: CreateSurveyDto) {
    return 'This action adds a new survey';
  }

  findAll() {
    return `This action returns all survey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
