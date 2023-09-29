import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SalesOperationController } from './controllers/sales-operation.controller';
import { SalesOperationService } from './services/sales-operation.service';
import { SalesOperationEntity } from './entities/sales-operation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SalesOperationEntity])
  ],
  controllers: [SalesOperationController],
  providers: [SalesOperationService]
})
export class SalesOperationModule {}
