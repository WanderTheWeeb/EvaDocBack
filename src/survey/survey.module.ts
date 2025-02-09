import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from 'src/core/entities/survey.entity';
import { OptionGroup } from 'src/core/entities/option-group.entity';
import { Answer } from 'src/core/entities/answer.entity';
import { Question } from 'src/core/entities/question.entity';
import { Option } from 'src/core/entities/option.entity';
import { AnswerController } from './answer/answer.controller';
import { OptionGroupController } from './option/option-group.controller';
import { OptionController } from './option/option.controller';
import { QuestionController } from './question/question.controller';
import { AnswerService } from './answer/answer.service';
import { OptionGroupService } from './option/option-group.service';
import { OptionService } from './option/option.service';
import { QuestionService } from './question/question.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Survey, Option, OptionGroup, Answer, Question]),
  ],
  controllers: [
    SurveyController,
    OptionController,
    OptionGroupController,
    AnswerController,
    QuestionController,
  ],
  providers: [
    SurveyService,
    OptionService,
    OptionGroupService,
    AnswerService,
    QuestionService,
  ],
})
export class SurveyModule {}
