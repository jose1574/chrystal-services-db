import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TaxTypeDto, UpdateTaxesTypeDto } from '../dtos/tax-types.dto';
import { TaxTypesEntity } from '../entities/tax-types.entity';

@Injectable()
export class TaxTypesService {
  constructor(
    @InjectRepository(TaxTypesEntity)
    private readonly taxTypeRepository: Repository<TaxTypesEntity>,
  ) {}

  async findAll(): Promise<TaxTypeDto[]> {
    return this.taxTypeRepository.find();
  }

  async findOneByCode(code: number): Promise<TaxTypeDto> {
    const taxe = await this.taxTypeRepository.findOne({ where: { code } });

    if (!taxe) {
      throw new NotFoundException(
        `taxType con el codigo ${code} no se encuentra.`,
      );
    }
    return taxe;
  }

  async insert(data: TaxTypeDto[]): Promise<any> {
    try {
      const newInstance = this.taxTypeRepository.create(data);
      const addNew = await this.taxTypeRepository.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar la taxType ${JSON.stringify(err)}`,
      );
    }
  }

  async update(
    id: number,
    changes: UpdateTaxesTypeDto,
  ): Promise<UpdateTaxesTypeDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(`taxType con el id ${id} no se encuentra`);
      }
      const merge = this.taxTypeRepository.merge(search, changes);
      const updateTaxType = this.taxTypeRepository.save(merge);

      return updateTaxType;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar la taxType ${JSON.stringify(error)}`,
      );
    }
  }

  async delete(id: number): Promise<TaxTypeDto> {
    const taxesTypeDelete = await this.findOneByCode(id);
    if (!taxesTypeDelete) {
      throw new NotFoundException(`taxType con ID ${id} no encontrado`);
    }
    await this.taxTypeRepository.remove(taxesTypeDelete);
    return taxesTypeDelete;
  }
}
