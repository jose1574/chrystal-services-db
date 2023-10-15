import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCodeEntity } from './entities/products-codes.entity';
import { ProductsCodesService } from './services/products-codes.service';
import { ProductsCodesController } from './controllers/products-codes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductCodeEntity]),    
  ],
  providers: [ProductsCodesService],
  controllers: [ProductsCodesController],
  exports: [TypeOrmModule],
})
export class ProductsCodesModule {}
