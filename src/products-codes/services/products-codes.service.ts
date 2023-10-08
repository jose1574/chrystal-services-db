import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductsCodesEntity } from '../entities/products.codes.entity';
import { ProductsCodesDto, UpdateProductCodeDto } from '../dtos/products.codes.dtos';

@Injectable()
export class ProductsCodesService {
    constructor(
        @InjectRepository(ProductsCodesEntity)
        private readonly productsCodeRepo: Repository<ProductsCodesEntity>,
    ){}

    async findAll():Promise<ProductsCodesEntity[]> {
        return await this.productsCodeRepo.find();
    }

    async findOne(id: string): Promise<ProductsCodesEntity> {
        return await this.productsCodeRepo.findOneBy({ main_code: id });
      }    

    async create(data: ProductsCodesDto): Promise<ProductsCodesDto> {
        const newProductCode = this.productsCodeRepo.create(data)
        return this.productsCodeRepo.save(newProductCode);
    }

    async update(id: string, changes: UpdateProductCodeDto ): Promise<UpdateProductCodeDto> {
        const productCode = await this.findOne(id);
        if (!productCode) {
            throw new NotFoundException(`codigo de producto con el id ${id} no existe`);
        }
        this.productsCodeRepo.merge(productCode, changes)
        return this.productsCodeRepo.save(productCode);
    }
}
