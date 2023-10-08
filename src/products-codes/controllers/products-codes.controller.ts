import { Controller, Get, Post, Body, NotFoundException, Param } from '@nestjs/common';

import { ProductsCodesService } from '../services/products-codes.service';
import { ProductsCodesDto } from '../dtos/products.codes.dtos';
@Controller('products-codes')
export class ProductsCodesController {
  constructor(private readonly productsCodesService: ProductsCodesService) {}

  @Get()
  async findAllCodes() {
    return this.productsCodesService.findAllProductsCodes();
  }

  @Get(':id')
  async findProduct(@Param('id') id: string) {
    const product = await this.productsCodesService.findOneCodeProduct(id);
    if (product) {
      return product;
    } else {
      throw new NotFoundException(
        `no se encuentra el codigo del producto con el id: ${id}`,
        'No encontrado',
      );
    }
  }

  @Post()
  async insertNewCode(@Body() body: ProductsCodesDto[]) {
    try {
      const newCodeProduct = this.productsCodesService.insertProductCode(body);
      return await newCodeProduct;
    } catch {
      throw new NotFoundException('Error inserting product code', 'Error');
    }
  }
}
