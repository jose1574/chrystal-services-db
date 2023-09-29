import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ProductsService } from './services/products.service';
import { ProductEntity } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [TypeOrmModule],
})
export class ProductsModule {}
