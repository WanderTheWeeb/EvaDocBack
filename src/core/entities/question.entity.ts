import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OptionGroup } from './option-group.entity';
import { Survey } from './survey.entity';
import { Answer } from './answer.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
  @ManyToOne(() => Survey, (survey) => survey.question)
  survey: Survey;
  @ManyToOne(() => OptionGroup, (optionGroup) => optionGroup.question)
  optionGroup: OptionGroup;
  @ManyToOne(() => Question, (question) => question.answer)
  answer: Answer;
}
