import { Module } from '@nestjs/common';
import { ProductsImageController } from './controllers/products-image.controller';
import { ProductsImageService } from './services/products-image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsImageEntity } from './entities/products-images.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsImageEntity])
  ],
  controllers: [ProductsImageController],
  providers: [ProductsImageService]
})
export class ProductsImageModule {}
