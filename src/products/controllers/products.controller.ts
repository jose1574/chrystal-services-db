import { 
    Controller,
    Get, 
    Post, 
    Param, 
    Body } from '@nestjs/common';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAllProducts() {
    return this.productsService.findAllProducts();
  }

  @Get(':id') 
  async findProduct(@Param("id") id : string) {
    return this.productsService.findOneProduct(id);
  }

}
