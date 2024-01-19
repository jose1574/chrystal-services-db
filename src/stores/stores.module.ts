import { Module } from '@nestjs/common';
import { StoresService } from './services/stores.service';
import { StoresController } from './controllers/stores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreEntity } from './entities/store.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StoreEntity])
  ],
  providers: [StoresService],
  controllers: [StoresController]
})
export class StoresModule {}
