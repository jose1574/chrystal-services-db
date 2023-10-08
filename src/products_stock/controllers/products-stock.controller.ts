import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  NotFoundException,
  Body,
} from '@nestjs/common';

import { ProductsStockService } from '../services/products-stock.service';
import {
  ProductsStockDto,
  UpdateProductStock,
} from '../dtos/products-stock.dto';

@Controller('products-stock')
export class ProductsStockController {
  constructor(private readonly productsStockService: ProductsStockService) {}

  @Get()
  async findAll(): Promise<ProductsStockDto[]> {
    return await this.productsStockService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string,
  ): Promise<ProductsStockDto> {
    const productStock = await this.productsStockService.findOne(id);
    if (!productStock) {
      throw new NotFoundException(
        `No se encuentra el stock del producto con el id ${id}`,
        'Error',
      );
    }
    return productStock;
  }

  @Post()
  async create(
    @Body() ProductStock: ProductsStockDto,
  ): Promise<ProductsStockDto> {
    try {
      const newProductStock =
        await this.productsStockService.create(ProductStock);
      return newProductStock;
    } catch (error) {
      throw new NotFoundException(`Error al guardar los datos`, `${error}`);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProductStock) {
    try {
      const productStock = this.productsStockService.update(id, body);
      return productStock;
    } catch (error) {
      throw new NotFoundException(
        `error al actualizar el stock del producto ${id}`,
        `${error}`,
      );
    }
  }
}
