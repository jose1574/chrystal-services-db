import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  NotFoundException,
  Body,
} from '@nestjs/common';

import { ProductsStockService } from '../services/products-stock.service';
import { ProductsService } from 'src/products/services/products.service';

import { ProductsStockDto } from '../dtos/products-stock.dto';
import { ProductsStockEntity } from '../entities/products-stock.entity';

@Controller('products-stock')
export class ProductsStockController {
  constructor(
    private readonly productsStockService: ProductsStockService,
    private readonly productsServices: ProductsService,
  ) {}

  @Get()
  async findProductsStock(): Promise<ProductsStockDto[]> {
    return await this.productsStockService.findProductsStock();
  }

  @Get(':id')
  async findProductStockById(
    @Param('id')
    id: string,
  ): Promise<ProductsStockDto> {
    const productStock =
      await this.productsStockService.getProductStockById(id);
    if (!productStock) {
      throw new NotFoundException(
        `No se encuentra el stock del producto con el id ${id}`,
        'Error',
      );
    }
    return productStock;
  }

  @Post()
  async insertProductStock(
    @Body()
    ProductStock: ProductsStockDto[],
  ): Promise<any> {
    try {
      const newProductStock =
        await this.productsStockService.insertProductStock(ProductStock);
      return newProductStock;
    } catch (error) {
      throw new NotFoundException(`Error al guardar los datos`, `${error}`);
    }
  }

  @Delete(':id')
  async deleteProductStock(@Param('id') id: string): Promise<any> {
    const findProduct = await this.findProductStockById(id);
    if (!findProduct) {
      throw new NotFoundException(`Error al guardar los datos`);
    }
    return this.productsStockService.deleteProductStock(id);
  }
}
