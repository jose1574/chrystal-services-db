import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from '../entities/product.entity';
import { ProductsDto, UpdateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<ProductsDto[]> {
    return await this.productRepo.find();
  }

  async findOne(id: string): Promise<ProductsDto> {
    return await this.productRepo.findOneBy({ code: id });
  }

  async create(data: ProductsDto): Promise<ProductsDto> {
    const newProduct = this.productRepo.create(data);
    return this.productRepo.save(newProduct);
  }

  async update(id: string, changes: UpdateProductDto): Promise<UpdateProductDto> {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException(`producto con el id ${id} no existe`);
    }
    this.productRepo.merge(product, changes);
    return this.productRepo.save(product);
  }
}
