import { PartialType } from "@nestjs/mapped-types";

import { IsString, IsNumber, IsBoolean } from "class-validator";
import { CoinDto } from "src/coin/dtos/coin.dto";
import { DepartmentDto } from "src/departments/dtos/department.dto";
import { OriginDto } from "src/origin/dtos/origin.dto";
import { StatusDto } from "src/status/dtos/status.dto";
import { TaxesDto } from "src/taxes/dtos/taxes.dto";
import { TaxesEntity } from "src/taxes/entities/taxes.entity";
import { TechnicianDto } from "src/technician/dtos/technician.dto";


/*
'department',
        'taxes',
        'status',
        'origin',
        'technician',
        'coin',
*/
export class ProductsDto {  
  @IsString()
  code: string;

  @IsString()
  description: string;

  @IsString()
  short_name: string;

  @IsString()
  mark: string;

  @IsString()
  model: string;

  @IsString()
  referenc: string;

  @IsString()
  department: DepartmentDto;

  @IsNumber()
  days_warranty: number;

  @IsString()
  sale_tax: string;

  @IsString()
  buy_tax: TaxesDto;

  @IsNumber()
  rounding_type: number;

  @IsNumber()
  costing_type: number;

  @IsNumber()
  discount: number;

  @IsNumber()
  max_discount: number;

  @IsNumber()
  minimal_sale: number;

  @IsNumber()
  maximal_sale: number;

  @IsString()
  status: StatusDto;

  @IsString()
  origin: OriginDto;

  @IsBoolean()
  take_department_utility: boolean;

  @IsBoolean()
  allow_decimal: boolean;

  @IsBoolean()
  edit_name: boolean;

  @IsNumber()
  sale_price: number;

  @IsString()
  product_type: string;

  @IsString()
  technician: TechnicianDto;

  @IsBoolean()
  request_technician: boolean;

  @IsBoolean()
  serialized: boolean;

  @IsBoolean()
  request_details: boolean;

  @IsBoolean()
  request_amount: boolean;

  @IsString()
  coin: CoinDto;

  @IsBoolean()
  allow_negative_stock: boolean;

  @IsBoolean()
  use_scale: boolean;

  @IsBoolean()
  add_unit_description: boolean;

  @IsBoolean()
  use_lots: boolean;

  @IsNumber()
  lots_order: number;

  @IsNumber()
  minimal_stock: number;

  @IsBoolean()
  notify_minimal_stock: boolean;

  @IsString()
  size: string;

  @IsString()
  color: string;

  @IsBoolean()
  extract_net_from_unit_cost_plus_tax: boolean;

  @IsNumber()
  maximum_stock: number;
}

export class UpdateProductDto extends PartialType(ProductsDto){}
