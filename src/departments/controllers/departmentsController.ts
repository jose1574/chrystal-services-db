import { Controller, Param, Post, Get, Body, Put, Delete} from '@nestjs/common';
import { DepartmentsService } from '../services/departments.service';
import { DepartmentDto, UpdateDepartmentDto } from '../dtos/department.dto';


@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentService: DepartmentsService) {}

    @Get()
    async findAll(): Promise<DepartmentDto[]> {
      return this.departmentService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<DepartmentDto> {
      return this.departmentService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: DepartmentDto[]): Promise<any> {
      return this.departmentService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateDepartmentDto,
    ): Promise<UpdateDepartmentDto> {
      return this.departmentService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<DepartmentDto> {
      return this.departmentService.delete(id);
    }

}
