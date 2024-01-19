import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsImageEntity } from '../entities/products-images.entity';
import { ProductsImageDto, UpdateProductsImageDto } from '../dtos/products-images.dto';

@Injectable()
export class ProductsImageService {
    constructor(
        @InjectRepository(ProductsImageEntity)
        private readonly productsImageRepo: Repository<ProductsImageEntity>,
      ) {}
    
      async findAll(): Promise<ProductsImageDto[]> {
        return this.productsImageRepo.find();
      }
    
      async findOneByCode(main_code: any): Promise<ProductsImageDto> {
        const productsImage = await this.productsImageRepo.findOne({ where: { main_code } });
    
        if (!productsImage) {
          throw new NotFoundException(
            `productsImage con el codigo ${main_code} no se encuentra.`,
          );
        }
        return productsImage;
      }
    
      async insert(data: ProductsImageDto[]): Promise<any> {
        try {
          const newInstance = this.productsImageRepo.create(data);
          const addNew = await this.productsImageRepo.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la productsImage ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProductsImageDto): Promise<UpdateProductsImageDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.productsImageRepo.merge(search, changes);
          const updateProductsImage = this.productsImageRepo.save(merge);
    
          return updateProductsImage;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la productsImage ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProductsImageDto> {
        const productsImageDelete = await this.findOneByCode(id);
        if (!productsImageDelete) {
          throw new NotFoundException(`productsImage con ID ${id} no encontrado`);
        }
        await this.productsImageRepo.remove(productsImageDelete);
        return productsImageDelete;
      }
}
