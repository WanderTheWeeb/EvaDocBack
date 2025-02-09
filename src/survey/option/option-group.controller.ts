import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OptionGroupService } from './option-group.service';
import { CreateOptionGroupDto } from 'src/core/dto/option/create-optiongroup.dto';
import { UpdateOptionGroupDto } from 'src/core/dto/option/update-optiongroup.dto';

@Controller('option-group')
export class OptionGroupController {
  constructor(private readonly optionGroupService: OptionGroupService) {}

  @Post()
  create(@Body() createOptionGroup: CreateOptionGroupDto) {
    return this.optionGroupService.create(createOptionGroup);
  }

  @Get()
  findAll() {
    return this.optionGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionGroupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOptionGroup: UpdateOptionGroupDto,
  ) {
    return this.optionGroupService.update(+id, updateOptionGroup);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionGroupService.remove(+id);
  }
}
