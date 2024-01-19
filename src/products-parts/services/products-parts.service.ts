import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductPartsEntity } from '../entities/products-parts.entity';
import { ProductsPartsDto, UpdateProductsPartsDto } from '../dtos/product-parts.dto';

@Injectable()
export class ProductsPartsService {
    constructor(
        @InjectRepository(ProductPartsEntity)
        private readonly productPartRepo: Repository<ProductPartsEntity>,
      ) {}
    
      async findAll(): Promise<ProductsPartsDto[]> {
        return await this.productPartRepo.find();
      }
    
      async findOne(id: number): Promise<ProductsPartsDto> {
        return await this.productPartRepo.findOneBy({ line: id });
      }
    
      async insert(data: ProductsPartsDto): Promise<any> {
        const result = this.productPartRepo.create(data);
        return this.productPartRepo.save(result);
      }
    
      async update(id: number, changes: UpdateProductsPartsDto): Promise<UpdateProductsPartsDto> {
        const result = await this.findOne(id);
        if (!result) {
          throw new NotFoundException(`producto con el id ${id} no existe`);
        }
        this.productPartRepo.merge(result, changes)
        return this.productPartRepo.save(result);
      }
}
 