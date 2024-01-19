import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 
import { ProductPartsEntity } from '../entities/products-parts.entity';
import { ProductsPartsDto, UpdateProductsPartsDto } from '../dtos/product-parts.dto';

@Injectable()
export class ProductsPartsService {
  constructor(
    @InjectRepository(ProductPartsEntity)
    private readonly productsPartsRepo: Repository<ProductPartsEntity>,
  ) {}

  async findAll(): Promise<ProductsPartsDto[]> {
    return this.productsPartsRepo.find();
  }

  async findOneByCode(line: string): Promise<ProductsPartsDto> {
    const productPart = await this.productsPartsRepo.findOne({ where: { line } });

    if (!productPart) {
      throw new NotFoundException(
        `productPart con el codigo ${line} no se encuentra.`,
      );
    }
    return productPart;
  }

  async insert(data: ProductsPartsDto[]): Promise<any> {
    try {
      const newInstance = this.productsPartsRepo.create(data);
      const addNew = await this.productsPartsRepo.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar la productPart ${JSON.stringify(err)}`,
      );
    }
  }

  async update(id: string, changes: UpdateProductsPartsDto): Promise<UpdateProductsPartsDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(`ProductPart con el id ${id} no se encuentra`);
      }
      const merge = this.productsPartsRepo.merge(search, changes);
      const updateProductPart = this.productsPartsRepo.save(merge);

      return updateProductPart;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar la tax ${JSON.stringify(error)}`,
      );
    }
  }

  async delete(id: string): Promise<ProductsPartsDto> {
    const productPartDelete = await this.findOneByCode(id);
    if (!productPartDelete) {
      throw new NotFoundException(`productPart con ID ${id} no encontrado`);
    }
    await this.productsPartsRepo.remove(productPartDelete);
    return productPartDelete;
  }
}
 