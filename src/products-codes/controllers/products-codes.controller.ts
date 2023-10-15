import { Controller, Get, Post, Body, NotFoundException, Param, Put } from '@nestjs/common';

import { ProductsCodesService } from '../services/products-codes.service';
import { ProductCodeDto, UpdateProductCodeDto } from '../dtos/products.codes.dtos';
@Controller('products-codes')
export class ProductsCodesController {
  constructor(private readonly productsCodesService: ProductsCodesService) {}

  @Get()
  async findAllCodes() {
    return this.productsCodesService.findAll();
  }

  @Get(':id')
  async findProduct(@Param('id') id: string) {
    const product = await this.productsCodesService.findOne(id);
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
  async insertNewCode(@Body() body: ProductCodeDto): Promise<ProductCodeDto> {
    try {
      const newCodeProduct = await this.productsCodesService.create(body);
      return newCodeProduct;
    } catch (err){
      throw new NotFoundException('Error inserting product code', `${err}`);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() changes: UpdateProductCodeDto): Promise<UpdateProductCodeDto> {
    return this.productsCodesService.update(id, changes);
  }
}
