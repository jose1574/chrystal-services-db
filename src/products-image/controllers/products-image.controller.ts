import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsImageService } from '../services/products-image.service';
import { ProductsImageDto, UpdateProductsImageDto } from '../dtos/products-images.dto';

@Controller('products-image')
export class ProductsImageController {
    constructor(private readonly productsImageService: ProductsImageService) {}

  @Get()
  async findAll(): Promise<ProductsImageDto[]> {
    return this.productsImageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<ProductsImageDto> {
    return this.productsImageService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: ProductsImageDto[]): Promise<any> {
    return this.productsImageService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateProductsImageDto,
  ): Promise<UpdateProductsImageDto> {
    return this.productsImageService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductsImageDto> {
    return this.productsImageService.delete(id);
  }
}
