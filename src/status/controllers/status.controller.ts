import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StatusService } from '../services/status.service';
import { StatusDto, UpdateStatusDto } from '../dtos/status.dto';

@Controller('status')
export class StatusController {
    constructor(private readonly statusServices: StatusService) {}

    @Get()
    async findAll(): Promise<StatusDto[]> {
      return this.statusServices.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<StatusDto> {
      return this.statusServices.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: StatusDto[]): Promise<any> {
      return this.statusServices.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateStatusDto,
    ): Promise<UpdateStatusDto> {
      return this.statusServices.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<StatusDto> {
      return this.statusServices.delete(id);
    }
}
