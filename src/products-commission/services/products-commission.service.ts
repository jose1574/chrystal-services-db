import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsCommissionEntity } from '../entities/products-commission.entity';
import {
  ProductsCommissionDto,
  UpdateProductsCommissionDto,
} from '../dtos/products-commision.dto';

@Injectable()
export class ProductsCommissionService {
  constructor(
    @InjectRepository(ProductsCommissionEntity)
    private readonly taxesRepository: Repository<ProductsCommissionEntity>,
  ) {}

  async findAll(): Promise<ProductsCommissionDto[]> {
    return this.taxesRepository.find();
  }

  async findOneByCode(product_code: any): Promise<ProductsCommissionDto> {
    const productCommission = await this.taxesRepository.findOne({
      where: { product_code },
    });

    if (!productCommission) {
      throw new NotFoundException(
        `productCommission con el codigo ${product_code} no se encuentra.`,
      );
    }
    return productCommission;
  }

  async insert(data: ProductsCommissionDto[]): Promise<any> {
    try {
      const newInstance = this.taxesRepository.create(data);
      const addNew = await this.taxesRepository.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar la productCommission ${JSON.stringify(err)}`,
      );
    }
  }

  async update(
    id: string,
    changes: UpdateProductsCommissionDto,
  ): Promise<UpdateProductsCommissionDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
      }
      const merge = this.taxesRepository.merge(search, changes);
      const productCommissionUpdate = this.taxesRepository.save(merge);

      return productCommissionUpdate;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar la productCommission ${JSON.stringify(error)}`,
      );
    }
  }

  async delete(id: string): Promise<ProductsCommissionDto> {
    const productCommissionDelete = await this.findOneByCode(id);
    if (!productCommissionDelete) {
      throw new NotFoundException(
        `productCommission con ID ${id} no encontrado`,
      );
    }
    await this.taxesRepository.remove(productCommissionDelete);
    return productCommissionDelete;
  }
}
