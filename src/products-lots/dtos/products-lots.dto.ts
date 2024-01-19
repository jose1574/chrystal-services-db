import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { ProductsDto } from 'src/products/dtos/product.dto';

export class ProductsLotsDto {
  @IsString()
  correlative: string;

  @IsString()
  lot_number: string;

  @IsString()
  product_code: ProductsDto;

  @IsDate()
  entry_date: Date;

  @IsString()
  entry_module: string;

  @IsNumber()
  entry_correlative: number;

  @IsNumber()
  entry_amount: number;

  @IsBoolean()
  expire: boolean;

  @IsDate()
  expire_date: Date;

  @IsBoolean()
  apply_prices: boolean;

  @IsDate()
  elaboration_date: Date;
}

export class UpdateProductsLotsDto extends PartialType(ProductsLotsDto) {}
