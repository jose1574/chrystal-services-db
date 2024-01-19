import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SizeDto, UpdateSizeDto } from '../dtos/size.dto';
import { SizeEntity } from '../entities/size.entity';

@Injectable()
export class SizeService {
    constructor(
        @InjectRepository(SizeEntity)
        private readonly sizeRepository: Repository<SizeEntity>,
      ) {}
    
      async findAll(): Promise<SizeDto[]> {
        return this.sizeRepository.find();
      }
    
      async findOneByCode(code: string): Promise<SizeDto> {
        const size = await this.sizeRepository.findOne({ where: { code } });
    
        if (!size) {
          throw new NotFoundException(
            `size con el codigo ${code} no se encuentra.`,
          );
        }
        return size;
      }
    
      async insert(data: SizeDto[]): Promise<any> {
        try {
          const newInstance = this.sizeRepository.create(data);
          const addNew = await this.sizeRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la size ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateSizeDto): Promise<UpdateSizeDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`size con el id ${id} no se encuentra`);
          }
          const merge = this.sizeRepository.merge(search, changes);
          const updateSize = this.sizeRepository.save(merge);
    
          return updateSize;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la size ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<SizeDto> {
        const sizeDelete = await this.findOneByCode(id);
        if (!sizeDelete) {
          throw new NotFoundException(`size con ID ${id} no encontrado`);
        }
        await this.sizeRepository.remove(sizeDelete);
        return sizeDelete;
      }
}

