import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsProviderEntity } from '../entities/products-provider.entity';
import { ProductsProviderDto, UpdateProductsProviderDto } from '../dtos/products-provider.dto';

@Injectable()
export class ProductsProviderService {
    constructor(
        @InjectRepository(ProductsProviderEntity)
        private readonly productsProviderRepo: Repository<ProductsProviderEntity>,
      ) {}
    
      async findAll(): Promise<ProductsProviderDto[]> {
        return this.productsProviderRepo.find();
      }
    
      async findOneByCode(line: string): Promise<ProductsProviderDto> {
        const productProvider = await this.productsProviderRepo.findOne({ where: { line } });
    
        if (!productProvider) {
          throw new NotFoundException(`productProvider con el codigo ${line} no se encuentra.`);
        }
        return productProvider;
      }
    
      async insert(data: ProductsProviderDto[]): Promise<any> {
        try {
          const newInstance = this.productsProviderRepo.create(data);
          const addNew = await this.productsProviderRepo.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la productProvider ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProductsProviderDto): Promise<UpdateProductsProviderDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`productProvider con el id ${id} no se encuentra`);
          }
          const merge = this.productsProviderRepo.merge(search, changes);
          const updateProductProvider = this.productsProviderRepo.save(merge);
    
          return updateProductProvider;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la productProvider ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProductsProviderDto> {
        const productProviderDelete = await this.findOneByCode(id);
        if (!productProviderDelete) {
          throw new NotFoundException(`productProvider con ID ${id} no encontrado`);
        }
        await this.productsProviderRepo.remove(productProviderDelete);
        return productProviderDelete;
      }
}
