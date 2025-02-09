import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Professor } from "./professor.entity";
import { Question } from "./question.entity";
import { Period } from "./period.entity";

@Entity()
export class Survey {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @OneToMany(() => Professor, (professor) => professor.survey)
    professors: Professor[];
    @OneToMany(() => Question, (question) => question.survey)
    question: Question[];
    @OneToMany(() => Period, (period) => period.survey)
    period: Period[];
}
