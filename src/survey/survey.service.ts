import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSurveyDto } from 'src/core/dto/survey/create-survey.dto';
import { UpdateSurveyDto } from 'src/core/dto/survey/update-survey.dto';
import { Survey } from 'src/core/entities/survey.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
  ) {}

  create(createSurveyDto: CreateSurveyDto): Promise<Survey> {
    return this.surveyRepository.save(createSurveyDto);
  }

  findAll(): Promise<Survey[]> {
    return this.surveyRepository.find();
  }

  findOne(id: number): Promise<Survey | null> {
    return this.surveyRepository.findOneBy({ id });
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto): Promise<UpdateResult> {
    return this.surveyRepository.update(id, updateSurveyDto);
  }

  async remove(id: number): Promise<void> {
    await this.surveyRepository.softDelete(id);
  }
}
