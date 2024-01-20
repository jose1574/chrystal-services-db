import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProvincesEntity } from '../entities/provinces.entity';
import { ProvincesDto, UpdateProvincesDto } from '../dtos/provinces.dto';

@Injectable()
export class ProvincesService {
    constructor(
        @InjectRepository(ProvincesEntity)
        private readonly provincesRepository: Repository<ProvincesEntity>,
      ) {}
    
      async findAll(): Promise<ProvincesDto[]> {
        return this.provincesRepository.find();
      }
    
      async findOneByCode(code: string): Promise<ProvincesDto> {
        const province = await this.provincesRepository.findOne({ where: { code } });
    
        if (!province) {
          throw new NotFoundException(`province con el codigo ${code} no se encuentra.`);
        }
        return province;
      }
    
      async insert(data: ProvincesDto[]): Promise<any> {
        try {
          const newInstance = this.provincesRepository.create(data);
          const addNew = await this.provincesRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la province ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProvincesDto): Promise<UpdateProvincesDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.provincesRepository.merge(search, changes);
          const provinceUpdate = this.provincesRepository.save(merge);
    
          return provinceUpdate;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la province ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProvincesDto> {
        const provinceDelete = await this.findOneByCode(id);
        if (!provinceDelete) {
          throw new NotFoundException(`province con ID ${id} no encontrado`);
        }
        await this.provincesRepository.remove(provinceDelete);
        return provinceDelete;
      }
}
