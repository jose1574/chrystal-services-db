import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { StoreEntity } from '../entities/store.entity';
import { StoreDto, UpdateStoreDto } from '../dtos/store.dto';
import { Repository } from 'typeorm';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(StoreEntity)
    private readonly storeRepo: Repository<StoreEntity>,
  ) {}

  async findAll(): Promise<StoreDto[]> {
    return await this.storeRepo.find();
  }

  async findOneByCode(code: string): Promise<StoreDto> {
    const store = await this.storeRepo.findOne({ where: { code } });

    if (!store) {
      throw new NotFoundException(`store with code ${code} not found.`);
    }
    return store;
  }

  async insert(data: StoreDto[]): Promise<any> {
    try {
      const newInstance = this.storeRepo.create(data);
      const addNew = await this.storeRepo.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar la ubicacion ${JSON.stringify(err)}`,
      );
    }
  }

  async update(id: string, changes: UpdateStoreDto): Promise<UpdateStoreDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(
          `ubicacion con el id ${id} no se encuentra`,
        );
      }
      const merge = this.storeRepo.merge(search, changes);
      const updateStore = this.storeRepo.save(merge);

      return updateStore;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar la ubicacion ${JSON.stringify(error)}`,
      );
    }
  }
}
