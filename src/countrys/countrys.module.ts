import { Module } from '@nestjs/common';
import { CountrysController } from './controllers/countrys.controller';
import { CountrysService } from './services/countrys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountrysEntity } from './entities/countrys.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CountrysEntity])
  ],
  controllers: [CountrysController],
  providers: [CountrysService]
})
export class CountrysModule {}
