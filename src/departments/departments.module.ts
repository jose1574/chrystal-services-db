import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentsService } from './services/departments.service';
import { DepartmentsController } from './controllers/departmentsController';
import { DepartmentEntity } from './entities/department.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DepartmentEntity]),
  ],
  providers: [DepartmentsService],
  controllers: [DepartmentsController]
})
export class DepartmentsModule {}
