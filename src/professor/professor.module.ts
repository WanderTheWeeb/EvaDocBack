import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from 'src/core/entities/professor.entity';
import { Period } from 'src/core/entities/period.entity';
import { PeriodController } from './period/period.controller';
import { PeriodService } from './period/period.service';

@Module({
  imports: [TypeOrmModule.forFeature([Professor, Period])],
  controllers: [ProfessorController, PeriodController],
  providers: [ProfessorService, PeriodService],
})
export class ProfessorModule {}
