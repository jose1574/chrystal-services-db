import { Module } from '@nestjs/common';
import { ProductsStockService } from './services/products-stock.service';
import { ProductsStockController } from './controllers/products-stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductStockEntity } from './entities/products-stock.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductStockEntity])
  ],
  providers: [ProductsStockService],
  controllers: [ProductsStockController]
})
export class ProductsStockModule {}
