import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ProductsUnitsEntity } from '../entities/products-units.entity';
import {
  ProductsUnitsDto,
  UpdateProductsUnitsDto,
} from '../dtos/products-units.dto';

@Injectable()
export class ProductsUnitsService {
  constructor(
    @InjectRepository(ProductsUnitsEntity)
    private readonly productUnitRepository: Repository<ProductsUnitsEntity>,
  ) {}

  async findAll(): Promise<ProductsUnitsDto[]> {
    return this.productUnitRepository.find();
  }

  async findOneByCode(correlative: string): Promise<ProductsUnitsDto> {
    const productUnit = await this.productUnitRepository.findOne({ where: { correlative } });

    if (!productUnit) {
      throw new NotFoundException(
        `productUnit con el codigo ${correlative} no se encuentra.`,
      );
    }
    return productUnit;
  }

  async insert(data: ProductsUnitsDto[]): Promise<any> {
    try {
      const newInstance = this.productUnitRepository.create(data);
      const addNew = await this.productUnitRepository.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar la ProductUnit ${JSON.stringify(err)}`,
      );
    }
  }

  async update(id: string, changes: UpdateProductsUnitsDto): Promise<UpdateProductsUnitsDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
      }
      const merge = this.productUnitRepository.merge(search, changes);
      const updateProductUnit = this.productUnitRepository.save(merge);

      return updateProductUnit;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar la productUnit ${JSON.stringify(error)}`,
      );
    }
  }

  async delete(id: string): Promise<ProductsUnitsDto> {
    const productUnitDelete = await this.findOneByCode(id);
    if (!productUnitDelete) {
      throw new NotFoundException(`taxes con ID ${id} no encontrado`);
    }
    await this.productUnitRepository.remove(productUnitDelete);
    return productUnitDelete;
  }
}
