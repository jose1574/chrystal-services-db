import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './services/products.service';
import { ProductEntity } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [
    // TypeOrmModule.forFeature([ProductEntity], 'db2'),
    TypeOrmModule.forFeature([ProductEntity], 'db1'),    
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [TypeOrmModule, ProductsService],
})
export class ProductsModule {}
