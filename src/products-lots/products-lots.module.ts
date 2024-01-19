import { Module } from '@nestjs/common';
import { ProductsLotsController } from './controllers/products-lots.controller';
import { ProductsLotsService } from './services/products-lots.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsLotsEntity } from './entities/products-lots.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsLotsEntity])
  ],
  controllers: [ProductsLotsController],
  providers: [ProductsLotsService]
})
export class ProductsLotsModule {}
