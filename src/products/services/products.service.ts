import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from '../entities/product.entity';
import { ProductsDto } from '../dtos/product.dto';

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
<<<<<<< HEAD
    const product = await this.productRepo.findOneBy({code: id});
    if(product) {
      return product
    }else {
      throw new NotFoundException(`no se encuentra el producto con el id: ${id}`, "No encontrado")
    }
=======
    return await this.productRepo.findOneBy({ code: id });
  }

  async insertNewProduct(newProduct: ProductsDto[]): Promise<ProductEntity[]> {    
    return await this.productRepo.save(newProduct);
>>>>>>> parent of 551cbdb (se realizaron cambios en los nombres de las funciones de los servicios y controladores para que se entiendan mejor, ademas de que se mejoraron las funciones de los servicios, se añadio operation update en cada una de las tablas)
  }


}
