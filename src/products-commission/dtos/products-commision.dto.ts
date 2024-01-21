import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { ProductsDto } from "src/products/dtos/product.dto";

export class ProductsCommissionDto {
    @IsString()
    product_code: ProductsDto;
  
    @IsString()
    comission_type: string;
  
    @IsString()
    value_type: string;
  
    @IsNumber()
    perc_maximum_price: number;
  
    @IsNumber()
    perc_offer_price: number;
  
    @IsNumber()
    perc_higher_price: number;
  
    @IsNumber()
    perc_minimum_price: number;
  
    @IsNumber()
    perc_variable_price: number;
}

export class UpdateProductsCommissionDto extends PartialType(ProductsCommissionDto) {}