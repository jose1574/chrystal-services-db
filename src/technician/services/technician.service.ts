import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TechnicianDto, UpdateTechnicianDto } from '../dtos/technician.dto';
import { TechnicianEntity } from '../entities/technician.entity';

@Injectable()
export class TechnicianService {
    constructor(
        @InjectRepository(TechnicianEntity)
        private readonly taxesRepository: Repository<TechnicianEntity>,
      ) {}
    
      async findAll(): Promise<TechnicianDto[]> {
        return this.taxesRepository.find();
      }
    
      async findOneByCode(code: string): Promise<TechnicianDto> {
        const taxe = await this.taxesRepository.findOne({ where: { code } });
    
        if (!taxe) {
          throw new NotFoundException(
            `taxes con el codigo ${code} no se encuentra.`,
          );
        }
        return taxe;
      }
    
      async insert(data: TechnicianDto[]): Promise<any> {
        try {
          const newInstance = this.taxesRepository.create(data);
          const addNew = await this.taxesRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la taxes ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateTechnicianDto): Promise<UpdateTechnicianDto> {
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
            `Error al actualizar la taxes ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<TechnicianDto> {
        const taxesDelete = await this.findOneByCode(id);
        if (!taxesDelete) {
          throw new NotFoundException(`taxes con ID ${id} no encontrado`);
        }
        await this.taxesRepository.remove(taxesDelete);
        return taxesDelete;
      }
}
