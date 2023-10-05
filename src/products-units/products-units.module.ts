import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsUnitsService } from './services/products-units.service';
import { ProductsUnitsController } from './controllers/products-units.controller';

import { ProductsUnitEntity } from './entities/products-units.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsUnitEntity])
  ],
  providers: [ProductsUnitsService],
  controllers: [ProductsUnitsController]
})
export class ProductsUnitsModule {}
