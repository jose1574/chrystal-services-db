import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountrysEntity } from '../entities/countrys.entity';
import { CountrysDto, UpdateCountrysDto } from '../dtos/countrys.dto';

@Injectable()
export class CountrysService {
    constructor(
        @InjectRepository(CountrysEntity)
        private readonly countryRepository: Repository<CountrysEntity>,
      ) {}
    
      async findAll(): Promise<CountrysDto[]> {
        return this.countryRepository.find();
      }
    
      async findOneByCode(code: string): Promise<CountrysDto> {
        const country = await this.countryRepository.findOne({ where: { code } });
    
        if (!country) {
          throw new NotFoundException(`country con el codigo ${code} no se encuentra.`);
        }
        return country;
      }
    
      async insert(data: CountrysDto[]): Promise<any> {
        try {
          const newInstance = this.countryRepository.create(data);
          const addNew = await this.countryRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la country ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateCountrysDto): Promise<UpdateCountrysDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.countryRepository.merge(search, changes);
          const updateCountry = this.countryRepository.save(merge);
    
          return updateCountry;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la country ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<CountrysDto> {
        const countryDelete = await this.findOneByCode(id);
        if (!countryDelete) {
          throw new NotFoundException(`country con ID ${id} no encontrado`);
        }
        await this.countryRepository.remove(countryDelete);
        return countryDelete;
      }
}
