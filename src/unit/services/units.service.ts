import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UnitsDto, UpdateUnitsDto } from '../dtos/units.dto';
import { UnitsEntity } from '../entities/units.entity';
@Injectable()
export class UnitsService {
 
  constructor(
    @InjectRepository(UnitsEntity)
    private readonly unitsRepository: Repository<UnitsEntity>,
  ) {}

  async findAll(): Promise<UnitsDto[]> {
    return this.unitsRepository.find();
  }

  async findOneByCode(code: string): Promise<UnitsDto> {
    const unit = await this.unitsRepository.findOne({ where: { code } });

    if (!unit) {
      throw new NotFoundException(
        `unit con el codigo ${code} no se encuentra.`,
      );
    }
    return unit;
  }

  async insert(data: UnitsDto[]): Promise<any> {
    try {
      const newInstance = this.unitsRepository.create(data);
      const addNew = await this.unitsRepository.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar la unit ${JSON.stringify(err)}`,
      );
    }
  }

  async update(id: string, changes: UpdateUnitsDto): Promise<UpdateUnitsDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(`unit con el id ${id} no se encuentra`);
      }
      const merge = this.unitsRepository.merge(search, changes);
      const updateUnit = this.unitsRepository.save(merge);

      return updateUnit;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar la unit ${JSON.stringify(error)}`,
      );
    }
  }

  async delete(id: string): Promise<UnitsDto> {
    const unitDelete = await this.findOneByCode(id);
    if (!unitDelete) {
      throw new NotFoundException(`unit con ID ${id} no encontrado`);
    }
    await this.unitsRepository.remove(unitDelete);
    return unitDelete;
  }
}
