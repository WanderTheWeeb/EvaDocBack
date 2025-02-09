import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from 'src/core/dto/question/create-question.dto';
import { UpdateQuestionDto } from 'src/core/dto/question/update-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  getQuestions() {
    return this.questionService.findAll();
  }

  @Get(':id')
  getQuestion(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Patch(':id')
  updateQuestion(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  deleteQuestion(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
