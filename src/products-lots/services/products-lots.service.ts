import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsLotsEntity } from '../entities/products-lots.entity';
import { ProductsLotsDto, UpdateProductsLotsDto } from '../dtos/products-lots.dto';

@Injectable()
export class ProductsLotsService {
    
    constructor(
        @InjectRepository(ProductsLotsEntity)
        private readonly productsLotsRepo: Repository<ProductsLotsEntity>,
      ) {}
    
      async findAll(): Promise<ProductsLotsDto[]> {
        return this.productsLotsRepo.find();
      }
    
      async findOneByCode(correlative: string): Promise<ProductsLotsDto> {
        const productLot = await this.productsLotsRepo.findOne({ where: { correlative } });
    
        if (!productLot) {
          throw new NotFoundException(
            `productLot con el codigo ${correlative} no se encuentra.`,
          );
        }
        return productLot;
      }
    
      async insert(data: ProductsLotsDto[]): Promise<any> {
        try {
          const newInstance = this.productsLotsRepo.create(data);
          const addNew = await this.productsLotsRepo.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la productLot ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProductsLotsDto): Promise<UpdateProductsLotsDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.productsLotsRepo.merge(search, changes);
          const updateProductLot = this.productsLotsRepo.save(merge);
    
          return updateProductLot;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la productLot ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProductsLotsDto> {
        const productLotDelete = await this.findOneByCode(id);
        if (!productLotDelete) {
          throw new NotFoundException(`productLot con ID ${id} no encontrado`);
        }
        await this.productsLotsRepo.remove(productLotDelete);
        return productLotDelete;
      }
}
