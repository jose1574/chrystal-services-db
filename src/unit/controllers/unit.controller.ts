import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from '@nestjs/common';

import { UnitsService } from '../services/units.service';
import { UnitsDto, UpdateUnitsDto } from '../dtos/units.dto';

@Controller('units')
export class UnitController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get()
  async findAll(): Promise<UnitsDto[]> {
    return this.unitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<UnitsDto> {
    return this.unitsService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: UnitsDto[]): Promise<any> {
    return this.unitsService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateUnitsDto,
  ): Promise<UpdateUnitsDto> {
    return this.unitsService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UnitsDto> {
    return this.unitsService.delete(id);
  }
}
