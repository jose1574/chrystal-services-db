import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DepartmentEntity } from '../entities/department.entity';
import { DepartmentDto, UpdateDepartmentDto } from '../dtos/department.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly departmentRepo: Repository<DepartmentEntity>,
  ) {}

  async findAll(): Promise<DepartmentDto[]> {
    return this.departmentRepo.find();
  }

  async findOneByCode(code: string): Promise<DepartmentDto> {
    const department = await this.departmentRepo.findOne({ where: { code } });

    if (!department) {
      throw new NotFoundException(
        `departments con el codigo ${code} no se encuentra.`,
      );
    }
    return department;
  }

  async insert(data: DepartmentDto[]): Promise<any> {
    try {
      const newInstance = this.departmentRepo.create(data);
      const addNew = await this.departmentRepo.save(newInstance);
      return addNew;
    } catch (err) {
      throw new NotFoundException(
        `Error al insertar nuevo departement ${JSON.stringify(err)}`,
      );
    }
  }

  async update(id: string, changes: UpdateDepartmentDto): Promise<UpdateDepartmentDto> {
    try {
      const search = await this.findOneByCode(id);

      if (search!) {
        throw new NotFoundException(`taxes con el id ${id} no se encuentra`);
      }
      const merge = this.departmentRepo.merge(search, changes);
      const updateDepartment = this.departmentRepo.save(merge);

      return updateDepartment;
    } catch (error) {
      throw new NotFoundException(
        `Error al actualizar el nuevo department ${JSON.stringify(error)}`,
      );
    }
  }

  async delete(id: string): Promise<DepartmentDto> {
    const departmentDelete = await this.findOneByCode(id);
    if (!departmentDelete) {
      throw new NotFoundException(`taxes con ID ${id} no encontrado`);
    }
    await this.departmentRepo.remove(departmentDelete);
    return departmentDelete;
  }
}
