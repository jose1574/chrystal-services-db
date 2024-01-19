import { Module } from '@nestjs/common';
import { OriginController } from './controllers/origin.controller';
import { OriginService } from './services/origin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginEntity } from './entities/origin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OriginEntity])
  ],
  controllers: [OriginController],
  providers: [OriginService]
})
export class OriginModule {}
