import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class ProductsPartsDto {
    @IsString() 
    main_code: string;

    @IsString()
    part_code: string;

    @IsNumber()
    unit: number;

    @IsNumber()
    amount: number;

    @IsNumber()
    @IsNotEmpty()
    line: number;

    @IsString()
    cost_type: string;
  
}

export class UpdateProductsPartsDto extends PartialType(ProductsPartsDto){}
