import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitService } from './services/unit.service';
import { UnitController } from './controllers/unit.controller';
import { UnitEntity } from './entities/unit.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UnitEntity])
  ],
  providers: [UnitService],
  controllers: [UnitController]
})
export class UnitModule {}
