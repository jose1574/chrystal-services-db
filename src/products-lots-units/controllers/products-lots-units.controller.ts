import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsLotsUnitsService } from '../services/products-lots-units.service';
import { ProductsLotsUnitsDto, UpdateProductsLotsUnitsDto } from '../dtos/products-lots-units.dto';

@Controller('products-lots-units')
export class ProductsLotsUnitsController {
    constructor(private readonly productsLotsUnitsService: ProductsLotsUnitsService) {}

  @Get()
  async findAll(): Promise<ProductsLotsUnitsDto[]> {
    return this.productsLotsUnitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<ProductsLotsUnitsDto> {
    return this.productsLotsUnitsService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: ProductsLotsUnitsDto[]): Promise<any> {
    return this.productsLotsUnitsService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateProductsLotsUnitsDto,
  ): Promise<UpdateProductsLotsUnitsDto> {
    return this.productsLotsUnitsService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductsLotsUnitsDto> {
    return this.productsLotsUnitsService.delete(id);
  }
}
