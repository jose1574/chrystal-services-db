import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitsService } from './services/units.service';
import { UnitController } from './controllers/unit.controller';
import { UnitsEntity } from './entities/units.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UnitsEntity])
  ],
  providers: [UnitsService],
  controllers: [UnitController]
})
export class UnitModule {}
