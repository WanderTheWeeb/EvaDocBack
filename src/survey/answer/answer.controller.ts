import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from 'src/core/dto/question/create-answer.dto';
import { UpdateAnswerDto } from 'src/core/dto/question/update-answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly anwerService: AnswerService) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.anwerService.create(createAnswerDto);
  }

  @Get()
  findAll() {
    return this.anwerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anwerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.anwerService.update(+id, updateAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anwerService.remove(+id);
  }
}
