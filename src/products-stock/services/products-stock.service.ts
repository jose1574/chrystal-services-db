import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductStockEntity } from '../entities/products-stock.entity';
import { ProductsStockDto, UpdateProductStockDto } from '../dtos/products-stock.dto';

@Injectable()
export class ProductsStockService {
    constructor(
        @InjectRepository(ProductStockEntity)
        private readonly productRepo: Repository<ProductStockEntity>,
      ) {}
    
      async findAll(): Promise<ProductsStockDto[]> {
        return await this.productRepo.find();
      }
    
      async findOne(id: string): Promise<ProductsStockDto> {
        return await this.productRepo.findOneBy({ product_code: id });
      }
    
      async insert(data: ProductsStockDto): Promise<any> {
        const result = this.productRepo.create(data);
        return this.productRepo.save(result);
      }
    
      async update(id: string, changes: UpdateProductStockDto): Promise<any> {
        // const result = await this.findOne(id);
        // if (!result) {
        //   throw new NotFoundException(`producto con el id ${id} no existe`);
        // }
        // this.productRepo.merge(result, changes)
        // return this.productRepo.save(result);
      }

}
