import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from '../entities/product.entity';
import { ProductsDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductCodeDto } from 'src/products-codes/dtos/products.codes.dtos';

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

  async insert(data: ProductsDto): Promise<any> {
    const result = this.productRepo.create(data);
    return this.productRepo.save(result);
  }

  async update(
    id: string,
    changes: UpdateProductDto,
  ): Promise<UpdateProductDto> {
    const result = await this.findOne(id);
    if (!result) {
      throw new NotFoundException(`producto con el id ${id} no existe`);
    }
    this.productRepo.merge(result, changes);
    return this.productRepo.save(result);
  }
}
