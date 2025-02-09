import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnswerDto } from 'src/core/dto/question/create-answer.dto';
import { UpdateAnswerDto } from 'src/core/dto/question/update-answer.dto';
import { Answer } from 'src/core/entities/answer.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    return this.answerRepository.save(createAnswerDto);
  }

  findAll(): Promise<Answer[]> {
    return this.answerRepository.find();
  }

  findOne(id: number): Promise<Answer | null> {
    return this.answerRepository.findOneBy({ id });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto): Promise<UpdateResult> {
    return this.answerRepository.update(id, updateAnswerDto);
  }

  async remove(id: number): Promise<void> {
    await this.answerRepository.softDelete(id);
  }
}
