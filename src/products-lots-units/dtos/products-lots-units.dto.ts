import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { ProductsLotsDto } from 'src/products-lots/dtos/products-lots.dto';
import { ProductsUnitsDto } from 'src/products-units/dtos/products-units.dto';

export class ProductsLotsUnitsDto {
  @IsNumber()
  main_correlative: ProductsUnitsDto;

  @IsNumber()
  lots_correlative: ProductsLotsDto;

  @IsNumber()
  unitary_cost: number;

  @IsNumber()
  calculated_cost: number;

  @IsNumber()
  average_cost: number;

  @IsNumber()
  perc_waste_cost: number;

  @IsNumber()
  perc_handling_cost: number;

  @IsNumber()
  perc_operating_cost: number;

  @IsNumber()
  perc_additional_cost: number;

  @IsNumber()
  maximum_price: number;

  @IsNumber()
  offer_price: number;

  @IsNumber()
  higher_price: number;

  @IsNumber()
  minimum_price: number;

  @IsNumber()
  perc_maximum_price: number;

  @IsNumber()
  perc_offer_price: number;

  @IsNumber()
  perc_higher_price: number;

  @IsNumber()
  perc_minimum_price: number;

  @IsNumber()
  perc_freight_cost: number;

  @IsNumber()
  perc_discount_provider: number;
}

export class UpdateProductsLotsUnitsDto extends PartialType(ProductsLotsUnitsDto) {}