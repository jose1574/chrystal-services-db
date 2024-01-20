import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsSerialEntity } from '../entities/products-serial.entity';
import { ProductsSerialDto, UpdateProductsSerialDto } from '../dtos/products-serial.dto';

@Injectable()
export class ProductsSerialService {
    constructor(
        @InjectRepository(ProductsSerialEntity)
        private readonly productsSerialRepo: Repository<ProductsSerialEntity>,
      ) {}
    
      async findAll(): Promise<ProductsSerialDto[]> {
        return this.productsSerialRepo.find();
      }
    
      async findOneByCode(line: string): Promise<ProductsSerialDto> {
        const productSerial = await this.productsSerialRepo.findOne({ where: { line } });
    
        if (!productSerial) {
          throw new NotFoundException(`productSerial con el codigo ${line} no se encuentra.`);
        }
        return productSerial;
      }
    
      async insert(data: ProductsSerialDto[]): Promise<any> {
        try {
          const newInstance = this.productsSerialRepo.create(data);
          const addNew = await this.productsSerialRepo.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la productSerial ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProductsSerialDto): Promise<UpdateProductsSerialDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`productSeriales con el id ${id} no se encuentra`);
          }
          const merge = this.productsSerialRepo.merge(search, changes);
          const updateProductSerial = this.productsSerialRepo.save(merge);
    
          return updateProductSerial;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la productSerial ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProductsSerialDto> {
        const productSerialDelete = await this.findOneByCode(id);
        if (!productSerialDelete) {
          throw new NotFoundException(`productSerial con ID ${id} no encontrado`);
        }
        await this.productsSerialRepo.remove(productSerialDelete);
        return productSerialDelete;
      }
}
