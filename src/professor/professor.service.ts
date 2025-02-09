import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfessorDto } from 'src/core/dto/professor/create-professor.dto';
import { UpdateProfessorDto } from 'src/core/dto/professor/update-professor.dto';
import { Professor } from 'src/core/entities/professor.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private readonly profesorRepository: Repository<Professor>,
  ) {}

  create(createProfessorDto: CreateProfessorDto): Promise<Professor> {
    return this.profesorRepository.save(createProfessorDto);
  }

  findAll(): Promise<Professor[]> {
    return this.profesorRepository.find();
  }

  findOne(id: number): Promise<Professor | null> {
    return this.profesorRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateProfessorDto: UpdateProfessorDto,
  ): Promise<UpdateResult> {
    return this.profesorRepository.update(id, updateProfessorDto);
  }

  remove(id: number): Promise<UpdateResult> {
    return this.profesorRepository.softDelete(id);
  }
}
