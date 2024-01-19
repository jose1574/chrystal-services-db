import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  NotFoundException,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';

import { ProductsUnitsService } from '../services/products-units.service';
import { ProductsUnitsDto, UpdateProductsUnitsDto } from '../dtos/products-units.dto';

@Controller('products-units')
export class ProductsUnitsController {
  
  constructor(private readonly productsUnitsService: ProductsUnitsService) {}

  @Get()
  async findAll(): Promise<ProductsUnitsDto[]> {
    return this.productsUnitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<ProductsUnitsDto> {
    return this.productsUnitsService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: ProductsUnitsDto[]): Promise<any> {
    return this.productsUnitsService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateProductsUnitsDto,
  ): Promise<UpdateProductsUnitsDto> {
    return this.productsUnitsService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductsUnitsDto> {
    return this.productsUnitsService.delete(id);
  }
}
