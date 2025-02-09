import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Survey } from './survey.entity';

@Entity()
export class Period {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToOne(() => Survey, (survey) => survey.period)
  survey: Survey;
}
