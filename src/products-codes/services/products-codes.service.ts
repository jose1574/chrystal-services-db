import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';

import { ProductCodeEntity } from '../entities/products-codes.entity';
import {
  ProductCodeDto,
  UpdateProductCodeDto,
} from '../dtos/products.codes.dtos';

@Injectable()
export class ProductsCodesService {
  constructor(
    @InjectRepository(ProductCodeEntity)
    private readonly productRepo: Repository<ProductCodeEntity>,
  ) {}

  async findAll(): Promise<ProductCodeDto[]> {
    return this.productRepo.find();
  }

  async findOneByCode(other_code: string): Promise<ProductCodeDto> {
    const product = await this.productRepo.findOne({ where: { other_code } });

    if (!product) {
      throw new NotFoundException(
        `product con el codigo ${other_code} no se encuentra.`,
      );
    }
    return product;
  }

  async insert(data: ProductCodeDto[]): Promise<any> {
    try {
      const newInstance = this.productRepo.create(data);
      const addNew = await this.productRepo.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar el nuevo product ${JSON.stringify(err)}`,
      );
    }
  }

  async update(
    id: string,
    changes: UpdateProductCodeDto,
  ): Promise<UpdateProductCodeDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(`product con el id ${id} no se encuentra`);
      }
      const merge = this.productRepo.merge(search, changes);
      const updateProduct = this.productRepo.save(merge);

      return updateProduct;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar la taxes ${JSON.stringify(error)}`,
      );
    }
  }

  async delete(id: string): Promise<ProductCodeDto> {
    const taxesDelete = await this.findOneByCode(id);
    if (!taxesDelete) {
      throw new NotFoundException(`taxes con ID ${id} no encontrado`);
    }
    await this.productRepo.remove(taxesDelete);
    return taxesDelete;
  }
}
