import { Controller, Post, Get, Put, Body, Param, NotFoundException } from '@nestjs/common';

import { ProductsPartsService } from '../services/products-parts.service';
import { ProductsPartsDto, UpdateProductsPartsDto } from '../dtos/product-parts.dto';

@Controller('products-parts')
export class ProductsPartsController {

    
  constructor(private readonly productsPartsServices: ProductsPartsService) {}

  @Get()
  async findAll():Promise<ProductsPartsDto[]> {
    return await this.productsPartsServices.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ProductsPartsDto> {
    const product = await this.productsPartsServices.findOne(id);
    if (!product) {
      throw new NotFoundException(
        `no se encuentra el producto con el id: ${id}`,
        'No encontrado',
      );
    } return product;
  }

  @Post()
  async create(@Body() body: ProductsPartsDto): Promise<any> {
    try {
      const result = await this.productsPartsServices.insert(body);
      return await result;
    } catch (error) {
      console.error('ocurrio un error al insertar los datos: ', error);      
      throw new NotFoundException(
        'no se puede insertar el nuevo producto',
        `${error}`,
      );
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() changes: UpdateProductsPartsDto):Promise<UpdateProductsPartsDto> {
    const result = await this.productsPartsServices.update(id, changes);
    return result;
  }
}
