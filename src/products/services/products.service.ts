import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from '../entities/product.entity';
import { ProductsDto } from '../dtos/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}

  async findAllProducts() {
    return await this.productRepo.find();
  }

  async findOneProduct(id: string): Promise<ProductEntity> {
    return await this.productRepo.findOneBy({ code: id });
  }

  async insertNewProduct(newProduct: ProductsDto[]): Promise<ProductEntity[]> {    
    return await this.productRepo.save(newProduct);
  }
}
