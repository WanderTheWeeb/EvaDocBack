import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from 'src/core/dto/option/create-option.dto';
import { UpdateOptionDto } from 'src/core/dto/option/update-option.dto';
import { Option } from 'src/core/entities/option.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
  ) {}

  create(createOptionDto: CreateOptionDto): Promise<Option> {
    return this.optionRepository.save(createOptionDto);
  }

  findAll(): Promise<Option[]> {
    return this.optionRepository.find();
  }

  findOne(id: number): Promise<Option | null> {
    return this.optionRepository.findOneBy({ id });
  }

  update(id: number, updateOptionDto: UpdateOptionDto): Promise<UpdateResult> {
    return this.optionRepository.update(id, updateOptionDto);
  }

  delete(id: number): Promise<UpdateResult> {
    return this.optionRepository.softDelete(id);
  }
}
