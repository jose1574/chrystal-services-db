import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProvincesService } from '../services/provinces.service';
import { ProvincesDto, UpdateProvincesDto } from '../dtos/provinces.dto';

@Controller('provinces')
export class PrivincesController {
    constructor(private readonly provincesService: ProvincesService) {}

    @Get()
    async findAll(): Promise<ProvincesDto[]> {
      return this.provincesService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<ProvincesDto> {
      return this.provincesService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: ProvincesDto[]): Promise<any> {
      return this.provincesService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateProvincesDto,
    ): Promise<UpdateProvincesDto> {
      return this.provincesService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ProvincesDto> {
      return this.provincesService.delete(id);
    }
}
