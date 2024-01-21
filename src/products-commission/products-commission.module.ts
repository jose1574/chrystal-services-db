import { Module } from '@nestjs/common';
import { ProductsCommissionController } from './controllers/products-commission.controller';
import { ProductsCommissionService } from './services/products-commission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCommissionEntity } from './entities/products-commission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsCommissionEntity])
  ],
  controllers: [ProductsCommissionController],
  providers: [ProductsCommissionService]
})
export class ProductsCommissionModule {}
