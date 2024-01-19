import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNumber } from "class-validator";

export class ProductsStockDto {  
    @IsString()
    product_code: string;
  
    @IsString()
    store: string;
  
    @IsString()
    locations: string;
  
    @IsNumber()
    stock: number;
  
    @IsNumber()
    ordered_stock: string;
  
    @IsNumber()
    committed_stock: number;
}

export class UpdateProductStockDto extends PartialType(ProductsStockDto){}
