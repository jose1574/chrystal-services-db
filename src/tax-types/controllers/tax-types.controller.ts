import { Controller,  Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';

import { TaxTypesService } from '../services/tax-types.service';
import { TaxTypeDto, UpdateTaxesTypeDto } from '../dtos/tax-types.dto';

@Controller('tax-types')
export class TaxTypesController {
    constructor(private readonly taxTypeService: TaxTypesService) {}

    @Get()
    async findAll(): Promise<TaxTypeDto[]> {
      return this.taxTypeService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) code: number): Promise<TaxTypeDto> {
      return this.taxTypeService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: TaxTypeDto[]): Promise<any> {
      return this.taxTypeService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() changes: UpdateTaxesTypeDto,
    ): Promise<UpdateTaxesTypeDto> {
      return this.taxTypeService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<TaxTypeDto> {
      return this.taxTypeService.delete(id);
    }
}
