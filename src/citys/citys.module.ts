import { Module } from '@nestjs/common';
import { CitysController } from './controllers/citys.controller';
import { CitysService } from './services/citys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitysEntity } from './entities/citys.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CitysEntity])
  ],
  controllers: [CitysController],
  providers: [CitysService]
})
export class CitysModule {}
