import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TaxesDto, UpdateTaxesDto } from '../dtos/taxes.dto';
import { TaxesEntity } from '../entities/taxes.entity';

@Injectable()
export class TaxesService {
    constructor(
        @InjectRepository(TaxesEntity)
        private readonly taxesRepository: Repository<TaxesEntity>,
      ) {}
    
      async findAll(): Promise<TaxesDto[]> {
        return this.taxesRepository.find();
      }
    
      async findOneByCode(code: string): Promise<TaxesDto> {
        const tax = await this.taxesRepository.findOne({ where: { code } });
    
        if (!tax) {
          throw new NotFoundException(
            `tax con el codigo ${code} no se encuentra.`,
          );
        }
        return tax;
      }
    
      async insert(data: TaxesDto[]): Promise<any> {
        try {
          const newInstance = this.taxesRepository.create(data);
          const addNew = await this.taxesRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la tax ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateTaxesDto): Promise<UpdateTaxesDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.taxesRepository.merge(search, changes);
          const updatetaxes = this.taxesRepository.save(merge);
    
          return updatetaxes;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la tax ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<TaxesDto> {
        const taxesDelete = await this.findOneByCode(id);
        if (!taxesDelete) {
          throw new NotFoundException(`taxes con ID ${id} no encontrado`);
        }
        await this.taxesRepository.remove(taxesDelete);
        return taxesDelete;
      }
}
