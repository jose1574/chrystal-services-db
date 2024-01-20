import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { LocationDto } from 'src/locations/dtos/location.dto';
import { ProductsDto } from 'src/products/dtos/product.dto';
import { StoreDto } from 'src/stores/dtos/store.dto';

export class ProductsSerialDto {
  @IsString()
  product_code: ProductsDto;

  @IsString()
  line: string;

  @IsString()
  serial_no: string;

  @IsString()
  stock: number;

  @IsString()
  store: StoreDto;

  @IsString()
  locations: LocationDto;

  @IsNumber()
  correlative_in: number;

  @IsString()
  module_in: string;
}

export class UpdateProductsSerialDto extends PartialType(ProductsSerialDto) {}
