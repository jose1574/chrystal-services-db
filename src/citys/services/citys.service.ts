import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CitysEntity } from '../entities/citys.entity';
import { CitysDto, UpdateCitysDto } from '../dtos/citys.dto';

@Injectable()
export class CitysService {
    constructor(
        @InjectRepository(CitysEntity)
        private readonly cityReposiroty: Repository<CitysEntity>,
      ) {}
    
      async findAll(): Promise<CitysDto[]> {
        return this.cityReposiroty.find();
      }
    
      async findOneByCode(code: string): Promise<CitysDto> {
        const city = await this.cityReposiroty.findOne({ where: { code } });
    
        if (!city) {
          throw new NotFoundException(`city con el codigo ${code} no se encuentra.`);
        }
        return city;
      }
    
      async insert(data: CitysDto[]): Promise<any> {
        try {
          const newInstance = this.cityReposiroty.create(data);
          const addNew = await this.cityReposiroty.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la city ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateCitysDto): Promise<UpdateCitysDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.cityReposiroty.merge(search, changes);
          const updateCity = this.cityReposiroty.save(merge);
    
          return updateCity;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la city ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<CitysDto> {
        const CityDelete = await this.findOneByCode(id);
        if (!CityDelete) {
          throw new NotFoundException(`City con ID ${id} no encontrado`);
        }
        await this.cityReposiroty.remove(CityDelete);
        return CityDelete;
      }
}
