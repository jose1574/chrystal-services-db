import { Module } from '@nestjs/common';
import { PrivincesController } from './controllers/privinces.controller';
import { ProvincesService } from './services/provinces.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvincesEntity } from './entities/provinces.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProvincesEntity])
  ],
  controllers: [PrivincesController],
  providers: [ProvincesService]
})
export class ProvincesModule {}
