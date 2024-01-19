import { Module } from '@nestjs/common';
import { ProductsLotsStockController } from './controllers/products-lots-stock.controller';
import { ProductsLotsStockService } from './services/products-lots-stock.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsLotsStockEntity } from './entities/products-lots-stock.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsLotsStockEntity])
  ],
  controllers: [ProductsLotsStockController],
  providers: [ProductsLotsStockService]
})
export class ProductsLotsStockModule {}
