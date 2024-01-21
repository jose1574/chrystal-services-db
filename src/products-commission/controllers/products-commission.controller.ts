import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsCommissionService } from '../services/products-commission.service';
import {
  ProductsCommissionDto,
  UpdateProductsCommissionDto,
} from '../dtos/products-commision.dto';

@Controller('products-commission')
export class ProductsCommissionController {
  constructor(
    private readonly productsCommissionService: ProductsCommissionService,
  ) {}

  @Get()
  async findAll(): Promise<ProductsCommissionDto[]> {
    return this.productsCommissionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<ProductsCommissionDto> {
    return this.productsCommissionService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: ProductsCommissionDto[]): Promise<any> {
    return this.productsCommissionService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateProductsCommissionDto,
  ): Promise<UpdateProductsCommissionDto> {
    return this.productsCommissionService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductsCommissionDto> {
    return this.productsCommissionService.delete(id);
  }
}
