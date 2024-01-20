import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ProductsSerialService } from '../services/products-serial.service';
import { ProductsSerialDto, UpdateProductsSerialDto } from '../dtos/products-serial.dto';

@Controller('products-serial')
export class ProductsSerialController {
    constructor(private readonly productsSerialService: ProductsSerialService) {}

    @Get()
    async findAll(): Promise<ProductsSerialDto[]> {
      return this.productsSerialService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<ProductsSerialDto> {
      return this.productsSerialService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: ProductsSerialDto[]): Promise<any> {
      return this.productsSerialService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateProductsSerialDto,
    ): Promise<UpdateProductsSerialDto> {
      return this.productsSerialService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ProductsSerialDto> {
      return this.productsSerialService.delete(id);
    }
}
