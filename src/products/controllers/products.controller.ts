import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ProductsDto, UpdateProductDto } from '../dtos/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll():Promise<ProductsDto[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findCodeProduct(@Param('id') id: string): Promise<ProductsDto> {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException(
        `no se encuentra el producto con el id: ${id}`,
        'No encontrado',
      );
    } return product;
  }

  @Post()
  async createProduct(@Body() newProduct: ProductsDto): Promise<ProductsDto> {
    try {
      const createNewProduct = this.productsService.create(newProduct);
      return await createNewProduct;
    } catch (error) {
      throw new NotFoundException(
        'no se puede insertar el nuevo producto',
        'Error',
      );
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() changes: UpdateProductDto):Promise<UpdateProductDto> {
    return this.productsService.update(id, changes);
  }
}
