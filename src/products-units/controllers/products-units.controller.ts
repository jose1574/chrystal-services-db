import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsUnitsService } from '../services/products-units.service';
import { ProductsUnitsDto, UpdateProductsUnitsDto } from '../dtos/products-units.dto';

@Controller('products-units')
export class ProductsUnitsController {
  constructor(private readonly productsUnitsService: ProductsUnitsService) {}

  @Get()
  async findAll(): Promise<ProductsUnitsDto[]> {
    return await this.productsUnitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ProductsUnitsDto> {
    const productUnit = await this.productsUnitsService.findOne(id); 
    if (productUnit === null) {
      throw new NotFoundException(`El producto con el id "${id}" no se encuentra`);
    }
    return productUnit;
  }

  @Post()
  async insert(@Body() body: ProductsUnitsDto): Promise<ProductsUnitsDto> {
    try {
      const newProductUnits = this.productsUnitsService.insert(body);
      return await newProductUnits;
    } catch (error) {
      throw new NotFoundException(
        'no se puede insertar el nuevo producto',
        `${error}`,
      );
    }
  }

  @Put(':id')
  async update (@Param('id', ParseIntPipe) id: number, @Body() body :UpdateProductsUnitsDto): Promise<UpdateProductsUnitsDto> {
    return await this.productsUnitsService.update(id, body)
  }
}
