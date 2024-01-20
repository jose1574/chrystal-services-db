import { Module } from '@nestjs/common';
import { ProductsSerialController } from './controllers/products-serial.controller';
import { ProductsSerialService } from './services/products-serial.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsSerialEntity } from './entities/products-serial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsSerialEntity])],
  controllers: [ProductsSerialController],
  providers: [ProductsSerialService],
})
export class ProductsSerialModule {}
