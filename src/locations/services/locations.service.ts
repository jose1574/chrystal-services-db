import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { LocationEntity } from '../entities/location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationDto, UpdateLocationDto } from '../dtos/location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepo: Repository<LocationEntity>,
  ) {}

  async findAll(): Promise<LocationDto[]> {
    return this.locationRepo.find();
  }

  async findOneByCode(code: string): Promise<LocationDto> {
    const location = await this.locationRepo.findOne({where: { code }});
    
    if (!location) {
      throw new NotFoundException(`Location with code ${code} not found.`);
    }
    return location;
  }

  async insert(data: LocationDto[]): Promise<any> {
    try {
      const newInstance = this.locationRepo.create(data);
      const addNew = await this.locationRepo.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(`Error al insertar la ubicacion ${JSON.stringify(err)}`);
    }
  }

  async update(
    id: string,
    changes: UpdateLocationDto,
  ): Promise<UpdateLocationDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(
          `ubicacion con el id ${id} no se encuentra`,
        );
      }
      const merge = this.locationRepo.merge(search, changes);
      const updateLocation = this.locationRepo.save(merge);

      return updateLocation;
    } catch (error) {
      throw new NotFoundException(`Error al actualizar la ubicacion ${JSON.stringify(error)}`);

    }
  }
}
