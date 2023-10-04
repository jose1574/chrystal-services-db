import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ProductsDto } from '../dtos/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAllProducts() {
    return this.productsService.findAllProducts();
  }

  @Get(':id')
  async findCodeProduct(@Param('id') id: string) {
    const product = await this.productsService.findOneProduct(id);
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
  async createProduct(@Body() newProduct: ProductsDto[]) {
    try {
      const createNewProduct = this.productsService.insertNewProduct(newProduct);
      return await createNewProduct;
    } catch (error) {
      throw new NotFoundException(
        'no se puede insertar el nuevo producto',
        'Error',
      );
    }
  }
}
