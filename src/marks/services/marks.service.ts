import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MarksEntity } from '../entities/marks.entity';
import { MarksDto, UpdateMarksDto } from '../dtos/marks.dto';

@Injectable()
export class MarksService {
  constructor(
    @InjectRepository(MarksEntity)
    private readonly markRepository: Repository<MarksEntity>,
  ) {}

  async findAll(): Promise<MarksDto[]> {
    return this.markRepository.find();
  }

  async findOneByCode(code: string): Promise<MarksDto> {
    const mark = await this.markRepository.findOne({ where: { code } });

    if (!mark) {
      throw new NotFoundException(
        `Mark con el codigo ${code} no se encuentra.`,
      );
    }
    return mark;
  }

  async insert(data: MarksDto[]): Promise<any> {
    try {
      const newInstance = this.markRepository.create(data);
      const addNew = await this.markRepository.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar la mark ${JSON.stringify(err)}`,
      );
    }
  }

  async update(id: string, changes: UpdateMarksDto): Promise<UpdateMarksDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(`mark con el id ${id} no se encuentra`);
      }
      const merge = this.markRepository.merge(search, changes);
      const updateMark = this.markRepository.save(merge);

      return updateMark;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar la marca ${JSON.stringify(error)}`,
      );
    }
  }

  async delete(id: string): Promise<MarksDto> {
    const markDelete = await this.findOneByCode(id);
    if (!markDelete) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    await this.markRepository.remove(markDelete);
    return markDelete;
  }
}
