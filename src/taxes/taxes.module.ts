import { Module } from '@nestjs/common';
import { TaxesController } from './controllers/taxes.controller';
import { TaxesService } from './services/taxes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxesEntity } from './entities/taxes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxesEntity])],
  controllers: [TaxesController],
  providers: [TaxesService]
})
export class TaxesModule {}
