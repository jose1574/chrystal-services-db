import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsStatisticsEntity } from '../entities/products-statistics.entity';
import { ProductsStatisticsDto, UpdateProductsStatisticsDto } from '../dtos/products-statistics.dto';

@Injectable()
export class ProductsStatisticsService {
    constructor(
        @InjectRepository(ProductsStatisticsEntity)
        private readonly productsStatisticsRepo: Repository<ProductsStatisticsEntity>,
      ) {}
    
      async findAll(): Promise<ProductsStatisticsDto[]> {
        return this.productsStatisticsRepo.find();
      }
    
      async findOneByCode(product_code: any): Promise<ProductsStatisticsDto> {
        const productStatistic = await this.productsStatisticsRepo.findOne({ where: { product_code } });
    
        if (!productStatistic) {
          throw new NotFoundException(`productStatistic con el codigo ${product_code} no se encuentra.`);
        }
        return productStatistic;
      }
    
      async insert(data: ProductsStatisticsDto[]): Promise<any> {
        try {
          const newInstance = this.productsStatisticsRepo.create(data);
          const addNew = await this.productsStatisticsRepo.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la productStatistic ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProductsStatisticsDto): Promise<UpdateProductsStatisticsDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.productsStatisticsRepo.merge(search, changes);
          const updateProductStatistic = this.productsStatisticsRepo.save(merge);
    
          return updateProductStatistic;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la ProductStatistic ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProductsStatisticsDto> {
        const productStatisticDelete = await this.findOneByCode(id);
        if (!productStatisticDelete) {
          throw new NotFoundException(`taxes con ID ${id} no encontrado`);
        }
        await this.productsStatisticsRepo.remove(productStatisticDelete);
        return productStatisticDelete;
      }
}
