import { IsString, IsNumber, IsBoolean } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";


export class ProductsUnitsDto {
  @IsNumber()
  correlative: number;

  @IsString()
  unit: string; 

  @IsString()
  product_code: string;

  @IsBoolean()
  main_unit: boolean;

  @IsNumber()
  conversion_factor: number;

  @IsNumber()
  unit_type: number;

  @IsBoolean()
  show_in_screen: boolean;

  @IsBoolean()
  is_for_buy: boolean;

  @IsBoolean()
  is_for_sale: boolean;

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

  @IsNumber()
  lenght: number;

  @IsNumber()
  height: number;

  @IsNumber()
  width: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  capacitance: number;
}

export class UpdateProductsUnitsDto extends PartialType(ProductsUnitsDto) {}
