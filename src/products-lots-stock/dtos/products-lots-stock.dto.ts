import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { LocationDto } from 'src/locations/dtos/location.dto';
import { ProductsLotsDto } from 'src/products-lots/dtos/products-lots.dto';
import { StoreDto } from 'src/stores/dtos/store.dto';

export class ProductsLotsStockDto {
  @IsString()
  main_correlative: ProductsLotsDto;

  @IsString()
  store: StoreDto;

  @IsString()
  locations: LocationDto;

  @IsNumber()
  stock: number;

  @IsNumber()
  ordered_stock: number;

  @IsNumber()
  committed_stock: number;
}

export class UpdateProductsLotsStockDto extends PartialType(
  ProductsLotsStockDto,
) {}
