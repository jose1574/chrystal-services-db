import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { TaxesDto, UpdateTaxesDto } from '../dtos/taxes.dto';
import { TaxesService } from '../services/taxes.service';

@Controller('taxes')
export class TaxesController {
  constructor(private readonly taxesService: TaxesService) {}

  @Get()
  async findAll(): Promise<TaxesDto[]> {
    return this.taxesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<TaxesDto> {
    return this.taxesService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: TaxesDto[]): Promise<any> {
    return this.taxesService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateTaxesDto,
  ): Promise<UpdateTaxesDto> {
    return this.taxesService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TaxesDto> {
    return this.taxesService.delete(id);
  }
}
