import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusEntity } from '../entities/status.entity';
import { StatusDto, UpdateStatusDto } from '../dtos/status.dto';

@Injectable()
export class StatusService {
    constructor(
        @InjectRepository(StatusEntity)
        private readonly statusService: Repository<StatusEntity>,
      ) {}
    
      async findAll(): Promise<StatusDto[]> {
        return this.statusService.find();
      }
    
      async findOneByCode(code: string): Promise<StatusDto> {
        const status = await this.statusService.findOne({ where: { code } });
    
        if (!status) {
          throw new NotFoundException(
            `status con el codigo ${code} no se encuentra.`,
          );
        }
        return status;
      }
    
      async insert(data: StatusDto[]): Promise<any> {
        try {
          const newInstance = this.statusService.create(data);
          const addNew = await this.statusService.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la status ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateStatusDto): Promise<UpdateStatusDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`status con el id ${id} no se encuentra`);
          }
          const merge = this.statusService.merge(search, changes);
          const updateStatus = this.statusService.save(merge);
    
          return updateStatus;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la status ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<StatusDto> {
        const statusDelete = await this.findOneByCode(id);
        if (!statusDelete) {
          throw new NotFoundException(`status con ID ${id} no encontrado`);
        }
        await this.statusService.remove(statusDelete);
        return statusDelete;
      }
}
