import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsCodesService } from './services/products-codes.service';
import { ProductsCodesController } from './controllers/products-codes.controller';
import { ProductsCodesEntity } from './entities/products.codes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsCodesEntity])],
  providers: [ProductsCodesService],
  controllers: [ProductsCodesController],
})
export class ProductsCodesModule {}
