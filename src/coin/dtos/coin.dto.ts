import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsNumber, IsOptional, IsString,  } from "class-validator";

export class CoinDto {
    @IsString()
    code: string;
  
    @IsString()
    @IsOptional()
    description: string;
  
    @IsString()
    @IsOptional()
    symbol: string;
  
    @IsNumber()
    @IsOptional()
    sales_aliquot: number;
  
    @IsNumber()
    @IsOptional()
    buy_aliquot: number;
  
    @IsNumber()
    @IsOptional()
    factor_type: number;
  
    @IsNumber()
    @IsOptional()
    rounding_type: number;
  
    @IsString()
    @IsOptional()
    status: string;
  
    @IsBoolean()
    @IsOptional()
    show_in_browsers: boolean;
  
    @IsBoolean()
    @IsOptional()
    value_inventory: boolean;
  
    @IsBoolean()
    @IsOptional()
    apply_igtf: boolean;
  }

  export class UpdateCoinDto extends PartialType(CoinDto) {}