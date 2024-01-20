import { Module } from '@nestjs/common';
import { PersonTypeController } from './controllers/person-type.controller';
import { PersonTypeService } from './services/person-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonTypeEntity } from './entities/person.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonTypeEntity])
  ],
  controllers: [PersonTypeController],
  providers: [PersonTypeService]
})
export class PersonTypeModule {}
