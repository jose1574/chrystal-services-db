import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { ProductsDto } from 'src/products/dtos/product.dto';

export class ProductCodeDto {
  @IsString()
  main_code: ProductsDto;

  @IsString()
  other_code: string;

  @IsString()
  code_type: string;
}

export class UpdateProductCodeDto extends PartialType(ProductCodeDto) {}
