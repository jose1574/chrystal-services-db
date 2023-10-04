import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductsStockEntity } from '../entities/products-stock.entity';
import { ProductsStockDto } from '../dtos/products-stock.dto';

@Injectable()
export class ProductsStockService {
  constructor(
    @InjectRepository(ProductsStockEntity)
    private readonly prodStockRepo: Repository<ProductsStockEntity>,
  ) {}

  async findProductsStock(): Promise<ProductsStockEntity[]> {
    return await this.prodStockRepo.find();
  }

  async getProductStockById(id: string): Promise<ProductsStockEntity> {
    return await this.prodStockRepo.findOneBy({ product_code: id });
  }

  async insertProductStock(body: ProductsStockDto[]): Promise<any> {
    return this.prodStockRepo.save(body);
  }

  async deleteProductStock(id: any): Promise<any> {
    console.log(id);
    
    return this.prodStockRepo.delete(id);
  }
}
