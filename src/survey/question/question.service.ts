import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from 'src/core/dto/question/create-question.dto';
import { UpdateQuestionDto } from 'src/core/dto/question/update-question.dto';
import { Question } from 'src/core/entities/question.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  create(question: CreateQuestionDto): Promise<Question> {
    return this.questionRepository.save(question);
  }

  findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  findOne(id: number): Promise<Question | null> {
    return this.questionRepository.findOneBy({ id });
  }

  update(id: number, question: UpdateQuestionDto): Promise<UpdateResult> {
    return this.questionRepository.update(id, question);
  }

  remove(id: number): Promise<UpdateResult> {
    return this.questionRepository.softDelete(id);
  }
}
