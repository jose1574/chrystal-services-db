import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber } from 'class-validator';
import { ProductsUnitsDto } from 'src/products-units/dtos/products-units.dto';
import { ProductsDto } from 'src/products/dtos/product.dto';

export class ProductsPartsDto {
  @IsNumber()
  line: string;

  @IsString()
  main_code: ProductsDto;

  @IsString()
  part_code: ProductsDto;

  @IsString()
  unit: ProductsUnitsDto;

  @IsNumber()
  amount: number;

  @IsString()
  cost_type: string;
}

export class UpdateProductsPartsDto extends PartialType(ProductsPartsDto) {}
