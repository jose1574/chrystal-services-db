import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { ProductsDto } from 'src/products/dtos/product.dto';
import { ProviderDto } from 'src/provider/dtos/provider.dto';

export class ProductsProviderDto {
  @IsString()
  line: string;

  @IsString()
  product_code: ProductsDto;

  @IsString()
  provider_code: ProviderDto;

  @IsNumber()
  unitary_cost: number;

  @IsString()
  document_type: string;

  @IsString()
  document_no: string;

  @IsDate()
  emission_date: Date;

  @IsDate()
  register_date: Date;

  @IsNumber()
  amount: number;

  @IsNumber()
  unit: number;

  @IsString()
  coin_code: string;

  @IsNumber()
  related_line: number;
}

export class UpdateProductsProviderDto extends PartialType(ProductsProviderDto) {}
