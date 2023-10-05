import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ProductsUnitEntity } from '../entities/products-units.dto';

@Injectable()
export class ProductsUnitsService {
    constructor(
        @InjectRepository(ProductsUnitEntity)
        private readonly productsUnitsRepo: Repository<ProductsUnitEntity>
    ) {}


    async findAll(): Promise<ProductsUnitEntity[]> {
        return this.productsUnitsRepo.find();
    }

    async findOne(id: number): Promise<ProductsUnitEntity> {
        return this.productsUnitsRepo.findOneBy({correlative: id})
    };

    async insert(body: ProductsUnitEntity[]): Promise<ProductsUnitEntity[]> {
        return this.productsUnitsRepo.save(body);
    }

    async delete(id: number): Promise<any> {
        return this.productsUnitsRepo.delete(id);
    }
}
