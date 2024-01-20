import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsStatisticsService } from '../services/products-statistics.service';
import { ProductsStatisticsDto, UpdateProductsStatisticsDto } from '../dtos/products-statistics.dto';

@Controller('products-statistics')
export class ProductsStatisticsController {
    constructor(private readonly productsStatisticsService: ProductsStatisticsService) {}

  @Get()
  async findAll(): Promise<ProductsStatisticsDto[]> {
    return this.productsStatisticsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<ProductsStatisticsDto> {
    return this.productsStatisticsService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: ProductsStatisticsDto[]): Promise<any> {
    return this.productsStatisticsService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateProductsStatisticsDto,
  ): Promise<UpdateProductsStatisticsDto> {
    return this.productsStatisticsService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductsStatisticsDto> {
    return this.productsStatisticsService.delete(id);
  }
}
