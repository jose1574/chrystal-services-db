import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductsStockEntity } from '../entities/products-stock.entity';
import { ProductsStockDto, UpdateProductStock } from '../dtos/products-stock.dto';

@Injectable()
export class ProductsStockService {
  constructor(
    @InjectRepository(ProductsStockEntity)
    private readonly prodStockRepo: Repository<ProductsStockEntity>,
  ) {}

  async findAll(): Promise<ProductsStockDto[]> {
    return await this.prodStockRepo.find();
  }

  async findOne(id: string): Promise<ProductsStockDto> {
    return await this.prodStockRepo.findOneBy({ product_code: id });
  }

  async create(data: ProductsStockDto): Promise<ProductsStockDto> {
    const newProductStock = this.prodStockRepo.create(data);
    return await this.prodStockRepo.save(newProductStock);
  }

  async update(id: string, changes: UpdateProductStock): Promise<UpdateProductStock> {
    const productStock = await this.findOne(id);
    if(!productStock) {
      throw new NotFoundException('No se encontro el producto');
    }
    this.prodStockRepo.merge(productStock, changes);
    return this.prodStockRepo.save(productStock);
  }
}
