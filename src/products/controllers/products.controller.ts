import {
  Controller,
  Get,
  Post,
  Put,
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
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsDto> {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException(
        `no se encuentra el producto con el id: ${id}`,
        'No encontrado',
      );
    } return product;
  }

  @Post()
  async create(@Body() body: ProductsDto): Promise<any> {
    try {
      const result = await this.productsService.insert(body);
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
  async update(@Param('id') id: string, @Body() changes: UpdateProductDto):Promise<UpdateProductDto> {
    const result = await this.productsService.update(id, changes);
    return result;
  }
}
