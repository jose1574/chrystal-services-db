import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsLotsStockService } from '../services/products-lots-stock.service';
import { ProductsLotsStockDto, UpdateProductsLotsStockDto } from '../dtos/products-lots-stock.dto';

@Controller('products-lots-stock')
export class ProductsLotsStockController {
    constructor(private readonly productsLotsStockService: ProductsLotsStockService) {}

    @Get()
    async findAll(): Promise<ProductsLotsStockDto[]> {
      return this.productsLotsStockService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<ProductsLotsStockDto> {
      return this.productsLotsStockService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: ProductsLotsStockDto[]): Promise<any> {
      return this.productsLotsStockService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateProductsLotsStockDto,
    ): Promise<UpdateProductsLotsStockDto> {
      return this.productsLotsStockService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ProductsLotsStockDto> {
      return this.productsLotsStockService.delete(id);
    }
}
