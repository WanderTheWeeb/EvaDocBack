import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Survey } from './survey.entity';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  noPersonal: string;
  @Column()
  name: string;
  @Column()
  fisrtLastName: string;
  @Column()
  secondLastName: string;
  @ManyToOne(() => Survey, (survey) => survey.professors)
  survey: Survey;
}
