import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, ReplicationMode } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    // @InjectRepository(ProductEntity, 'db2')
    @InjectRepository(ProductEntity, 'db1')
    private productRepo: Repository<ProductEntity>,
  ) {
    this.test()
    
  }

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
// desde aqui es una prueba//

async test() {
  const query = this.productRepo.createQueryBuilder('db1')
  let result = await query.where({code: '1000'});
  console.log(query);
  
}

  
}
