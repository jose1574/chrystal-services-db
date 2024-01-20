import { Controller, Get, Post, Param, Put, Body, Delete } from '@nestjs/common';
import { CountrysService } from '../services/countrys.service';
import { CountrysDto, UpdateCountrysDto } from '../dtos/countrys.dto';

@Controller('countrys')
export class CountrysController {
    constructor(private readonly countrysService: CountrysService) {}

    @Get()
    async findAll(): Promise<CountrysDto[]> {
      return this.countrysService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<CountrysDto> {
      return this.countrysService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: CountrysDto[]): Promise<any> {
      return this.countrysService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateCountrysDto,
    ): Promise<UpdateCountrysDto> {
      return this.countrysService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<CountrysDto> {
      return this.countrysService.delete(id);
    }
}
