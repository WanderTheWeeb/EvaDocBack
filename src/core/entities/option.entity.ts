import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OptionGroup } from './option-group.entity';
import { Answer } from './answer.entity';

@Entity()
export class Option {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
  @ManyToOne(() => OptionGroup, (group) => group.option)
  group: OptionGroup;
  @OneToMany(() => Answer, (answer) => answer.option)
  answer: Answer[];
}
