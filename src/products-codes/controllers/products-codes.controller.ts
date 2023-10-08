import { Controller, Get, Post, Put, Body, NotFoundException, Param } from '@nestjs/common';

import { ProductsCodesService } from '../services/products-codes.service';
import { ProductsCodesDto, UpdateProductCodeDto } from '../dtos/products.codes.dtos';
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
  async insertNewCode(@Body() body: ProductsCodesDto): Promise<ProductsCodesDto> {
    return this.productsCodesService.create(body)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProductCodeDto): Promise<UpdateProductCodeDto> {
    try {
      const updateProduct = this.productsCodesService.update(id, body);
      return updateProduct;
    }catch (error) {
      throw new NotFoundException(`Error al actualizar`, `${error}`);
    }
  }
}
