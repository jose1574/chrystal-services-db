import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { SalesOperationEntity } from '../entities/sales-operation.entity';

@Injectable()
export class SalesOperationService {
  constructor(
    @InjectRepository(SalesOperationEntity, 'db1')
    private readonly salesOperationsService: Repository<SalesOperationEntity>,
  ) {}

  async findAllSalesOperation() {
    return await this.salesOperationsService.find();
  }

  async findOneSalesOperation(id: number): Promise<SalesOperationEntity> {
    const salesOperation = await this.salesOperationsService.findOneBy({
      correlative: id,
    });
    if (salesOperation) {
      return salesOperation;
    } else {
      throw new NotFoundException(
        `No encontramos el operación de venta ${id}`,
        'No encontrado',
      );
    }
  }
}
