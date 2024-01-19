import { Controller, Get, Post, Put, NotFoundException, Body, Param } from '@nestjs/common';

import { ProductsStockService } from '../services/products-stock.service';
import { ProductsStockDto, UpdateProductStockDto } from '../dtos/products-stock.dto';

@Controller('products-stock')
export class ProductsStockController {

    constructor(private readonly productsStockService: ProductsStockService) {}

    @Get()
    async findAll():Promise<ProductsStockDto[]> {
      return await this.productsStockService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ProductsStockDto> {
      const product = await this.productsStockService.findOne(id);
      if (!product) {
        throw new NotFoundException(
          `no se encuentra el producto con el id: ${id}`,
          'No encontrado',
        );
      } return product;
    }
  
    @Post()
    async create(@Body() body: ProductsStockDto): Promise<any> {
      try {
        const result = await this.productsStockService.insert(body);
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
    async update(@Param('id') id: string, @Body() changes: UpdateProductStockDto):Promise<UpdateProductStockDto> {
      const result = await this.productsStockService.update(id, changes);
      return result;
    }


}
