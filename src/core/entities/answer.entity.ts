import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Option } from './option.entity';
import { Question } from './question.entity';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Question, (question) => question.answer)
  question: Question;
  @ManyToOne(() => Option, (option) => option.answer)
  option: Option;
}
