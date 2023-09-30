import { Injectable, NotFoundException } from '@nestjs/common';
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
    const product = await this.productRepo.findOneBy({code: id});
    if(product) {
      return product
    }else {
      throw new NotFoundException(`no se encuentra el producto con el id: ${id}`, "No encontrado")
    }
  }


}
