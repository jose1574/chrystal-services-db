import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UnitDto, UpdateUnitDto } from '../dtos/unit.dto';
import { UnitEntity } from '../entities/unit.entity';
@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(UnitEntity)
    private readonly unitRepo: Repository<UnitEntity>,
  ) {}

  async find(): Promise<UnitDto[]> {
    return await this.unitRepo.find();
  }

  async findOne(id: string) {
    return await this.unitRepo.findOneBy({ code: id });
  }

  async insert(data: UnitDto): Promise<any> {
    const newData = this.unitRepo.create(data);
    return await this.unitRepo.insert(newData);
  }

  async update(id: string, changes: UpdateUnitDto): Promise<any> {
    const unit = await this.findOne(id);
    if (!unit) {
      throw new NotFoundException(`no se encuentran datos con el ${id} `);
    }    
    this.unitRepo.merge(unit, changes);
    return await this.unitRepo.save(unit);
    
  }
}
