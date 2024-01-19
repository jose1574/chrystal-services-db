import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';

import { MarksService } from '../services/marks.service';
import { MarksDto, UpdateMarksDto } from '../dtos/marks.dto';

@Controller('marks')
export class MarksController {
  constructor(private readonly markService: MarksService) {}
 
  @Get()
  async findAll(): Promise<MarksDto[]> {
    return this.markService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<MarksDto> {
    return this.markService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: MarksDto[]): Promise<any> {
    return this.markService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateMarksDto,
  ): Promise<UpdateMarksDto> {
    return this.markService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<MarksDto> {
    return this.markService.delete(id);
  }
}
