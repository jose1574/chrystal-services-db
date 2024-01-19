import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';

import { ProductsCodesService } from '../services/products-codes.service';
import { ProductCodeDto, UpdateProductCodeDto } from '../dtos/products.codes.dtos';
@Controller('products-codes')
export class ProductsCodesController { constructor(private readonly productCodeService: ProductsCodesService) {}

@Get()
async findAll(): Promise<ProductCodeDto[]> {
  return this.productCodeService.findAll();
}

@Get(':id')
async findOne(@Param('id') code: string): Promise<ProductCodeDto> {
  return this.productCodeService.findOneByCode(code);
}

@Post()
async insert(@Body() data: ProductCodeDto[]): Promise<any> {
  return this.productCodeService.insert(data);
}

@Put(':id')
async update(
  @Param('id') id: string,
  @Body() changes: UpdateProductCodeDto,
): Promise<UpdateProductCodeDto> {
  return this.productCodeService.update(id, changes);
}

@Delete(':id')
async delete(@Param('id') id: string): Promise<ProductCodeDto> {
  return this.productCodeService.delete(id);
}
}
