import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductsCodesEntity } from '../entities/products.codes.entity';

@Injectable()
export class ProductsCodesService {
    constructor(
        @InjectRepository(ProductsCodesEntity)
        private readonly productsCodeRepo: Repository<ProductsCodesEntity>,
    ){}

    async findAllProductsCodes():Promise<ProductsCodesEntity[]> {
        return await this.productsCodeRepo.find();
    }

    async findOneCodeProduct(id: string): Promise<ProductsCodesEntity> {
        return await this.productsCodeRepo.findOneBy({ main_code: id });
      }    

    async insertProductCode(newCode: ProductsCodesEntity[]) {
        return this.productsCodeRepo.save(newCode);
    }
}
