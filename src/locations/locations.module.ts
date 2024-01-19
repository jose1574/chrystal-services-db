import { Module } from '@nestjs/common';
import { LocationsService } from './services/locations.service';
import { LocationsController } from './controllers/locations.controller';
import { LocationEntity } from './entities/location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([LocationEntity])
  ],
  providers: [LocationsService],
  controllers: [LocationsController]
})
export class LocationsModule {}
