import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsLotsStockEntity } from '../entities/products-lots-stock.entity';
import { ProductsLotsStockDto, UpdateProductsLotsStockDto } from '../dtos/products-lots-stock.dto';

@Injectable()
export class ProductsLotsStockService {
    constructor(
        @InjectRepository(ProductsLotsStockEntity)
        private readonly productLotRepository: Repository<ProductsLotsStockEntity>,
      ) {}
    
      async findAll(): Promise<ProductsLotsStockDto[]> {
        return this.productLotRepository.find();
      }
    
      async findOneByCode(main_correlative: any): Promise<ProductsLotsStockDto> {
        const productLot = await this.productLotRepository.findOne({ where: { main_correlative } });
    
        if (!productLot) {
          throw new NotFoundException(
            `productLot con el codigo ${main_correlative} no se encuentra.`,
          );
        }
        return productLot;
      }
    
      async insert(data: ProductsLotsStockDto[]): Promise<any> {
        try {
          const newInstance = this.productLotRepository.create(data);
          const addNew = await this.productLotRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la productLot ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProductsLotsStockDto): Promise<UpdateProductsLotsStockDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.productLotRepository.merge(search, changes);
          const updateProductLot = this.productLotRepository.save(merge);
    
          return updateProductLot;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la productLot ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProductsLotsStockDto> {
        const productLotDelete = await this.findOneByCode(id);
        if (!productLotDelete) {
          throw new NotFoundException(`productLot con ID ${id} no encontrado`);
        }
        await this.productLotRepository.remove(productLotDelete);
        return productLotDelete;
      }
}
