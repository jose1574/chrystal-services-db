import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  NotFoundException,
  Put,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ProductsDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductsUnitsDto } from 'src/products-units/dtos/products-units.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAllProducts() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findCodeProduct(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    if (product) {
      return product;
    } else {
      throw new NotFoundException(
        `no se encuentra el producto con el id: ${id}`,
        'No encontrado',
      );
    }
  }

  @Post()
  async create(@Body() body: ProductsDto): Promise<any> {
    return this.productsService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProductDto) {
    try {
      const updateProduct = this.productsService.update(id, body);
      return updateProduct;
    }catch (error) {
      throw new NotFoundException(`Error al actualizar`, `${error}`);
    }
  }
}
