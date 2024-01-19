import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsLotsService } from '../services/products-lots.service';
import { ProductsLotsDto, UpdateProductsLotsDto } from '../dtos/products-lots.dto';

@Controller('products-lots')
export class ProductsLotsController {
    constructor(private readonly productsLotsService: ProductsLotsService) {}

    @Get()
    async findAll(): Promise<ProductsLotsDto[]> {
      return this.productsLotsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<ProductsLotsDto> {
      return this.productsLotsService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: ProductsLotsDto[]): Promise<any> {
      return this.productsLotsService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateProductsLotsDto,
    ): Promise<UpdateProductsLotsDto> {
      return this.productsLotsService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ProductsLotsDto> {
      return this.productsLotsService.delete(id);
    }
}
