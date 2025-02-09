import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePeriodDto } from 'src/core/dto/professor/create-period.dto';
import { UpdatePeriodDto } from 'src/core/dto/professor/update-period.dto';
import { Period } from 'src/core/entities/period.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PeriodService {
  constructor(
    @InjectRepository(Period)
    private readonly periodRepository: Repository<Period>,
  ) {}

  create(period: CreatePeriodDto): Promise<Period> {
    return this.periodRepository.save(period);
  }

  findAll(): Promise<Period[]> {
    return this.periodRepository.find();
  }

  findOne(id: number): Promise<Period | null> {
    return this.periodRepository.findOneBy({ id });
  }

  update(id: number, period: UpdatePeriodDto): Promise<UpdateResult> {
    return this.periodRepository.update(id, period);
  }

  remove(id: number): Promise<UpdateResult> {
    return this.periodRepository.softDelete(id);
  }
}
