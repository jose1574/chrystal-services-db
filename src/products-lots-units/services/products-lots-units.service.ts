import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsLotsUnitsEntity } from '../entities/products-lots-units.entity';
import { ProductsLotsUnitsDto, UpdateProductsLotsUnitsDto } from '../dtos/products-lots-units.dto';

@Injectable()
export class ProductsLotsUnitsService {
    constructor(
        @InjectRepository(ProductsLotsUnitsEntity)
        private readonly productsLotsUnitsRepo: Repository<ProductsLotsUnitsEntity>,
      ) {}
    
      async findAll(): Promise<ProductsLotsUnitsDto[]> {
        return this.productsLotsUnitsRepo.find();
      }
    
      async findOneByCode(main_correlative: any): Promise<ProductsLotsUnitsDto> {
        const productLotUnit = await this.productsLotsUnitsRepo.findOne({ where: { main_correlative } });
    
        if (!productLotUnit) {
          throw new NotFoundException(
            `productLotUnit con el codigo ${main_correlative} no se encuentra.`,
          );
        }
        return productLotUnit;
      }
    
      async insert(data: ProductsLotsUnitsDto[]): Promise<any> {
        try {
          const newInstance = this.productsLotsUnitsRepo.create(data);
          const addNew = await this.productsLotsUnitsRepo.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la productLotUnit ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProductsLotsUnitsDto): Promise<UpdateProductsLotsUnitsDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`ProductLotUnit con el id ${id} no se encuentra`);
          }
          const merge = this.productsLotsUnitsRepo.merge(search, changes);
          const updateProductLotUnit = this.productsLotsUnitsRepo.save(merge);
    
          return updateProductLotUnit;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la ProductLotUnit ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProductsLotsUnitsDto> {
        const productLotUnitDelete = await this.findOneByCode(id);
        if (!productLotUnitDelete) {
          throw new NotFoundException(`productLotUnit con ID ${id} no encontrado`);
        }
        await this.productsLotsUnitsRepo.remove(productLotUnitDelete);
        return productLotUnitDelete;
      }
}
