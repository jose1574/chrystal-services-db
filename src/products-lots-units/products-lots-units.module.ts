import { Module } from '@nestjs/common';
import { ProductsLotsUnitsController } from './controllers/products-lots-units.controller';
import { ProductsLotsUnitsService } from './services/products-lots-units.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsLotsUnitsEntity } from './entities/products-lots-units.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsLotsUnitsEntity]),
  ],
  controllers: [ProductsLotsUnitsController],
  providers: [ProductsLotsUnitsService]
})
export class ProductsLotsUnitsModule {}
