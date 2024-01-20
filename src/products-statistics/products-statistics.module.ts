import { Module } from '@nestjs/common';
import { ProductsStatisticsController } from './controllers/products-statistics.controller';
import { ProductsStatisticsService } from './services/products-statistics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsStatisticsEntity } from './entities/products-statistics.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsStatisticsEntity])
  ],
  controllers: [ProductsStatisticsController],
  providers: [ProductsStatisticsService]
})
export class ProductsStatisticsModule {}
