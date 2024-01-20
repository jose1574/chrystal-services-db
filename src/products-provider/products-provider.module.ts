import { Module } from '@nestjs/common';
import { ProductsProviderController } from './controllers/products-provider.controller';
import { ProductsProviderService } from './services/products-provider.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsProviderEntity } from './entities/products-provider.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsProviderEntity])
  ],
  controllers: [ProductsProviderController],
  providers: [ProductsProviderService]
})
export class ProductsProviderModule {}
