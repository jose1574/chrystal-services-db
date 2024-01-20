import { Controller, Get, Post, Param, Delete, Body, Put } from '@nestjs/common';
import { TownsService } from '../services/towns.service';
import { TownsDto, UpdateTownsDto } from '../dtos/towns.dto';

@Controller('towns')
export class TownsController {
    constructor(private readonly townsService: TownsService) {}

  @Get()
  async findAll(): Promise<TownsDto[]> {
    return this.townsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<TownsDto> {
    return this.townsService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: TownsDto[]): Promise<any> {
    return this.townsService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateTownsDto,
  ): Promise<UpdateTownsDto> {
    return this.townsService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TownsDto> {
    return this.townsService.delete(id);
  }
}
