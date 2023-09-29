import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from '../entities/product.entity';

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
    return this.productRepo.findOneBy({code: id});
  }


}
