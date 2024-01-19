import { Module } from '@nestjs/common';
import { ProductsPartsService } from './services/products-parts.service';
import { ProductsPartsController } from './controllers/products-parts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductPartsEntity } from './entities/products-parts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductPartsEntity])
  ],
  providers: [ProductsPartsService],
  controllers: [ProductsPartsController]
})
export class ProductsPartsModule {}
