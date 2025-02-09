import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";
import { Option } from "./option.entity";

@Entity()
export class OptionGroup {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @OneToMany(() => Question, (question) => question.optionGroup)
    question: Question[];
    @OneToMany(() => Option, (option) => option.group)
    option: Option[];
}