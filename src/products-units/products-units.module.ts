import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsUnitsService } from './services/products-units.service';
import { ProductsUnitsController } from './controllers/products-units.controller';

import { ProductsUnitsEntity } from './entities/products-units.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsUnitsEntity])
  ],
  providers: [ProductsUnitsService],
  controllers: [ProductsUnitsController]
})
export class ProductsUnitsModule {}
