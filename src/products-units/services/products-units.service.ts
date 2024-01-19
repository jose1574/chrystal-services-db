import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ProductsUnitEntity } from '../entities/products-units.entity';
import {
  ProductsUnitsDto,
  UpdateProductsUnitsDto,
} from '../dtos/products-units.dto';

@Injectable()
export class ProductsUnitsService {
  constructor(
    @InjectRepository(ProductsUnitEntity)
    private readonly productsUnitsRepo: Repository<ProductsUnitEntity>,
  ) {}

  async findAll(): Promise<any> {
    return this.productsUnitsRepo.find();
  }

  async findOne(id: number): Promise<any> {
    return this.productsUnitsRepo.findOneBy({correlative: id});
  }

  async insert(data: any): Promise<any> {
    const newProduct = this.productsUnitsRepo.create(data); 
    return this.productsUnitsRepo.save(newProduct);
  }

  async update(id: number, changes: any): Promise<any> {
    const productUnit = await this.findOne(id);
    if (!productUnit) {
      throw new NotFoundException(`El id ${id} no existe`);
    }
    this.productsUnitsRepo.merge(productUnit, changes);
    return this.productsUnitsRepo.save(productUnit);
  }
}
