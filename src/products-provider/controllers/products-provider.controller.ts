import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { ProductsProviderService } from '../services/products-provider.service';
import { ProductsProviderDto, UpdateProductsProviderDto } from '../dtos/products-provider.dto';

@Controller('products-provider')
export class ProductsProviderController {
    constructor(private readonly roductsProviderService: ProductsProviderService) {}

  @Get()
  async findAll(): Promise<ProductsProviderDto[]> {
    return this.roductsProviderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<ProductsProviderDto> {
    return this.roductsProviderService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: ProductsProviderDto[]): Promise<any> {
    return this.roductsProviderService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateProductsProviderDto,
  ): Promise<UpdateProductsProviderDto> {
    return this.roductsProviderService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductsProviderDto> {
    return this.roductsProviderService.delete(id);
  }
}
