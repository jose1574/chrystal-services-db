import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TownsEntity } from '../entities/towns.entity';
import { TownsDto, UpdateTownsDto } from '../dtos/towns.dto';

@Injectable()
export class TownsService {
    constructor(
        @InjectRepository(TownsEntity)
        private readonly townsRepository: Repository<TownsEntity>,
      ) {}
    
      async findAll(): Promise<TownsDto[]> {
        return this.townsRepository.find();
      }
    
      async findOneByCode(code: string): Promise<TownsDto> {
        const town = await this.townsRepository.findOne({ where: { code } });
    
        if (!town) {
          throw new NotFoundException(`town con el codigo ${code} no se encuentra.`);
        }
        return town;
      }
    
      async insert(data: TownsDto[]): Promise<any> {
        try {
          const newInstance = this.townsRepository.create(data);
          const addNew = await this.townsRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la town ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateTownsDto): Promise<UpdateTownsDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`town con el id ${id} no se encuentra`);
          }
          const merge = this.townsRepository.merge(search, changes);
          const updateTown = this.townsRepository.save(merge);
    
          return updateTown;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la tax ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<TownsDto> {
        const townDelete = await this.findOneByCode(id);
        if (!townDelete) {
          throw new NotFoundException(`town con ID ${id} no encontrado`);
        }
        await this.townsRepository.remove(townDelete);
        return townDelete;
      }
}
