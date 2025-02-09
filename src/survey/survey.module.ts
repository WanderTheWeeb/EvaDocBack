import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from 'src/core/entities/survey.entity';
import { OptionGroup } from 'src/core/entities/option-group.entity';
import { Answer } from 'src/core/entities/answer.entity';
import { Question } from 'src/core/entities/question.entity';
import { Period } from 'src/core/entities/period.entity';
import { Option } from 'src/core/entities/option.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Survey, Option, OptionGroup, Answer, Question, Period])
  ],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule { }
