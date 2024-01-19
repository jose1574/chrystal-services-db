import { Module } from '@nestjs/common';
import { TechnicianController } from './controllers/technician.controller';
import { TechnicianService } from './services/technician.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicianEntity } from './entities/technician.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TechnicianEntity])
  ],
  controllers: [TechnicianController],
  providers: [TechnicianService]
})
export class TechnicianModule {}
