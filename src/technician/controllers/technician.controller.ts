import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { TechnicianService } from '../services/technician.service';
import { TechnicianDto, UpdateTechnicianDto } from '../dtos/technician.dto';

@Controller('technician')
export class TechnicianController {
    
  constructor(private readonly technicianService: TechnicianService) {}

  @Get()
  async findAll(): Promise<TechnicianDto[]> {
    return this.technicianService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<TechnicianDto> {
    return this.technicianService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: TechnicianDto[]): Promise<any> {
    return this.technicianService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateTechnicianDto,
  ): Promise<UpdateTechnicianDto> {
    return this.technicianService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TechnicianDto> {
    return this.technicianService.delete(id);
  }
}
