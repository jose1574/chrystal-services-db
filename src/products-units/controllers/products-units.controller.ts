import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsUnitsService } from '../services/products-units.service';
import { ProductsUnitsDto } from '../dtos/products-units.dto';

@Controller('products-units')
export class ProductsUnitsController {
  constructor(private readonly productsUnitsService: ProductsUnitsService) {}

  @Get()
  async findAll(): Promise<ProductsUnitsDto[]> {
    return await this.productsUnitsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProductsUnitsDto> {
    const productUnit = await this.productsUnitsService.findOne(id);
    if (productUnit === null) {
      throw new NotFoundException(`El producto con el id "${id}" no se encuentra`);
    }
    return productUnit;
  }

  @Post()
  async insert(@Body() body: ProductsUnitsDto): Promise<any> {
    return await this.productsUnitsService.insert(body)
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const findProduct = await this.findOne(id);
    if(!findProduct) {
        throw  new NotFoundException(`No existe un Producto con ese Id: ${id}`);
    }
    return this.productsUnitsService.delete(id);
  }
}
