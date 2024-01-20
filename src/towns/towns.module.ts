import { Module } from '@nestjs/common';
import { TownsController } from './controllers/towns.controller';
import { TownsService } from './services/towns.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TownsEntity } from './entities/towns.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TownsEntity])
  ],
  controllers: [TownsController],
  providers: [TownsService]
})
export class TownsModule {}
