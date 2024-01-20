import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CitysService } from '../services/citys.service';
import { CitysDto, UpdateCitysDto } from '../dtos/citys.dto';

@Controller('citys')
export class CitysController {
    constructor(private readonly citysService: CitysService) {}

    @Get()
    async findAll(): Promise<CitysDto[]> {
      return this.citysService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<CitysDto> {
      return this.citysService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: CitysDto[]): Promise<any> {
      return this.citysService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateCitysDto,
    ): Promise<UpdateCitysDto> {
      return this.citysService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<CitysDto> {
      return this.citysService.delete(id);
    }
}
