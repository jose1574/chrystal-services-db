import { Module } from '@nestjs/common';
import { TaxTypesController } from './controllers/tax-types.controller';
import { TaxTypesService } from './services/tax-types.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxTypesEntity } from './entities/tax-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxTypesEntity])],
  controllers: [TaxTypesController],
  providers: [TaxTypesService],
})
export class TaxTypesModule {}
