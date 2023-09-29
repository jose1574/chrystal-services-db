import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { SalesOperationEntity } from '../entities/sales-operation.entity';

@Injectable()
export class SalesOperationService {
    constructor(
        @InjectRepository(SalesOperationEntity) 
        private readonly salesOperationsService: Repository<SalesOperationEntity>,
    ) {}

    async findAllSalesOperation() {
        return await this.salesOperationsService.find();
      }
    
      async findOneSalesOperation(id: string): Promise<SalesOperationEntity> {
        return this.salesOperationsService.findOneBy({correlative: id});
      }


}
