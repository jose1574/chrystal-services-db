import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';

import { ProductCodeEntity } from '../entities/products-codes.entity';
import {
  ProductCodeDto,
  UpdateProductCodeDto,
} from '../dtos/products.codes.dtos';
import { ProductEntity } from 'src/products/entities/product.entity';

@Injectable()
export class ProductsCodesService {
  constructor(
    @InjectRepository(ProductCodeEntity)
    private readonly productsCodeRepo: Repository<ProductCodeEntity>,
  ) {}


  async findAll(): Promise<ProductCodeDto[]> {
    return await this.productsCodeRepo.find();
  }

  async findOne(id: string): Promise<ProductCodeDto> {
    return await this.productsCodeRepo.findOneBy({ other_code: id });
  }

  async create(data: ProductCodeDto): Promise<any> {
    const newData = this.productsCodeRepo.create(data)
    return this.productsCodeRepo.save(newData)
  }

  async update(
    id: string,
    changes: UpdateProductCodeDto,
  ): Promise<UpdateProductCodeDto> {
    const productCode = await this.findOne(id);
    if (!productCode) {
      throw new NotFoundException('Product Code not found');
    }
    this.productsCodeRepo.merge(productCode, changes);
    return this.productsCodeRepo.save(productCode);
  }
}
