import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OriginEntity } from '../entities/origin.entity';
import { OriginDto, UpdateOriginDto } from '../dtos/origin.dto';

@Injectable()
export class OriginService {
    
    constructor(
        @InjectRepository(OriginEntity)
        private readonly originRepository: Repository<OriginEntity>,
      ) {}
    
      async findAll(): Promise<OriginDto[]> {
        return this.originRepository.find();
      }
    
      async findOneByCode(code: string): Promise<OriginDto> {
        const origin = await this.originRepository.findOne({ where: { code } });
    
        if (!origin) {
          throw new NotFoundException(
            `origin con el codigo ${code} no se encuentra.`,
          );
        }
        return origin;
      }
    
      async insert(data: OriginDto[]): Promise<any> {
        try {
          const newInstance = this.originRepository.create(data);
          const addNew = await this.originRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la origin ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateOriginDto): Promise<UpdateOriginDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`origin con el id ${id} no se encuentra`);
          }
          const merge = this.originRepository.merge(search, changes);
          const updateOrigin = this.originRepository.save(merge);
    
          return updateOrigin;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la origin ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<OriginDto> {
        const originDelete = await this.findOneByCode(id);
        if (!originDelete) {
          throw new NotFoundException(`origin con ID ${id} no encontrado`);
        }
        await this.originRepository.remove(originDelete);
        return originDelete;
      }
}
