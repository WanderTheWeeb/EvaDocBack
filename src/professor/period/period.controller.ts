import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PeriodService } from './period.service';
import { CreatePeriodDto } from 'src/core/dto/professor/create-period.dto';
import { UpdatePeriodDto } from 'src/core/dto/professor/update-period.dto';

@Controller('period')
export class PeriodController {
  constructor(private readonly periodService: PeriodService) {}

  @Post()
  create(@Body() createPeriodDto: CreatePeriodDto) {
    return this.periodService.create(createPeriodDto);
  }

  @Get()
  findAll() {
    return this.periodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePeriodDto: UpdatePeriodDto) {
    return this.periodService.update(+id, updatePeriodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodService.remove(+id);
  }
}
