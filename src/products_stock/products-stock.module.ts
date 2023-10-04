import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsStockService } from './services/products-stock.service';
import { ProductsService } from 'src/products/services/products.service';

import { ProductsStockController } from './controllers/products-stock.controller';

import { ProductsStockEntity } from './entities/products-stock.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsStockEntity, ProductEntity])
  ],
  providers: [ProductsStockService, ProductsService],
  controllers: [ProductsStockController]
})
export class ProductsStockModule {}
