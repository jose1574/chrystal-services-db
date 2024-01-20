import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProviderEntity } from '../entities/provider.entity';
import { ProviderDto, UpdateProviderDto } from '../dtos/provider.dto';

@Injectable()
export class ProviderService {
    constructor(
        @InjectRepository(ProviderEntity)
        private readonly providerRepository: Repository<ProviderEntity>,
      ) {}
    
      async findAll(): Promise<ProviderDto[]> {
        return this.providerRepository.find();
      }
    
      async findOneByCode(code: string): Promise<ProviderDto> {
        const provider = await this.providerRepository.findOne({ where: { code } });
    
        if (!provider) {
          throw new NotFoundException(`provider con el codigo ${code} no se encuentra.`);
        }
        return provider;
      }
    
      async insert(data: ProviderDto[]): Promise<any> {
        try {
          const newInstance = this.providerRepository.create(data);
          const addNew = await this.providerRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la provider ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateProviderDto): Promise<UpdateProviderDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
          }
          const merge = this.providerRepository.merge(search, changes);
          const providerUpdate= this.providerRepository.save(merge);
    
          return providerUpdate;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la tax ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<ProviderDto> {
        const providerDelete = await this.findOneByCode(id);
        if (!providerDelete) {
          throw new NotFoundException(`provider con ID ${id} no encontrado`);
        }
        await this.providerRepository.remove(providerDelete);
        return providerDelete;
      }
}
