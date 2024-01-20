import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonTypeEntity } from '../entities/person.entity';
import { PersonTypeDto, UpdatePersonTypeDto } from '../dto/person.dto';

@Injectable()
export class PersonTypeService {
    constructor(
        @InjectRepository(PersonTypeEntity)
        private readonly personTypeRepository: Repository<PersonTypeEntity>,
      ) {}
    
      async findAll(): Promise<PersonTypeDto[]> {
        return this.personTypeRepository.find();
      }
    
      async findOneByCode(code: string): Promise<PersonTypeDto> {
        const personType = await this.personTypeRepository.findOne({ where: { code } });
    
        if (!personType) {
          throw new NotFoundException(`personType con el codigo ${code} no se encuentra.`);
        }
        return personType;
      }
    
      async insert(data: PersonTypeDto[]): Promise<any> {
        try {
          const newInstance = this.personTypeRepository.create(data);
          const addNew = await this.personTypeRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la personType ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdatePersonTypeDto): Promise<UpdatePersonTypeDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`personType  con el id ${id} no se encuentra`);
          }
          const merge = this.personTypeRepository.merge(search, changes);
          const updatePersonType = this.personTypeRepository.save(merge);
    
          return updatePersonType;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la personType ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<PersonTypeDto> {
        const personTypeDelete = await this.findOneByCode(id);
        if (!personTypeDelete) {
          throw new NotFoundException(`pereson con ID ${id} no encontrado`);
        }
        await this.personTypeRepository.remove(personTypeDelete);
        return personTypeDelete;
      }
}
