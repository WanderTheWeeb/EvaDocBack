import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionGroupDto } from 'src/core/dto/option/create-optiongroup.dto';
import { UpdateOptionGroupDto } from 'src/core/dto/option/update-optiongroup.dto';
import { OptionGroup } from 'src/core/entities/option-group.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class OptionGroupService {
  constructor(
    @InjectRepository(OptionGroup)
    private optionGroupRepository: Repository<OptionGroup>,
  ) {}

  create(createOptionGroupDto: CreateOptionGroupDto): Promise<OptionGroup> {
    return this.optionGroupRepository.save(createOptionGroupDto);
  }

  findAll(): Promise<OptionGroup[]> {
    return this.optionGroupRepository.find();
  }

  findOne(id: number): Promise<OptionGroup | null> {
    return this.optionGroupRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateOptionGroupDto: UpdateOptionGroupDto,
  ): Promise<UpdateResult> {
    return this.optionGroupRepository.update(id, updateOptionGroupDto);
  }

  remove(id: number): Promise<UpdateResult> {
    return this.optionGroupRepository.softDelete(id);
  }
}
