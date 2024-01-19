import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';

import {
  ProductsPartsDto,
  UpdateProductsPartsDto,
} from '../dtos/product-parts.dto';

import { ProductsPartsService } from '../services/products-parts.service';

@Controller('products-parts')
export class ProductsPartsController {
  constructor(private readonly productsPartsService: ProductsPartsService) {}

  @Get()
  async findAll(): Promise<ProductsPartsDto[]> {
    return this.productsPartsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<ProductsPartsDto> {
    return this.productsPartsService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: ProductsPartsDto[]): Promise<any> {
    return this.productsPartsService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateProductsPartsDto,
  ): Promise<UpdateProductsPartsDto> {
    return this.productsPartsService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductsPartsDto> {
    return this.productsPartsService.delete(id);
  }
}
