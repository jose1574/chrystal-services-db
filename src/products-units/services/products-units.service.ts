import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ProductsUnitEntity } from '../entities/products-units.dto';
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

  async findAll(): Promise<ProductsUnitsDto[]> {
    return this.productsUnitsRepo.find();
  }

  async findOne(id: number): Promise<ProductsUnitsDto> {
    return this.productsUnitsRepo.findOneBy({correlative: id});
  }

  async insert(body: ProductsUnitsDto): Promise<any> {
    const newProduct = await this.productsUnitsRepo.create(body); 
    return this.productsUnitsRepo.insert(newProduct);
  }

  async update(id: number, changes: UpdateProductsUnitsDto): Promise<UpdateProductsUnitsDto> {
    const productUnit = await this.findOne(id);
    if (!productUnit) {
      throw new NotFoundException(`El id ${id} no existe`);
    }
    this.productsUnitsRepo.merge(productUnit, changes);
    return this.productsUnitsRepo.save(productUnit);
  }
}
