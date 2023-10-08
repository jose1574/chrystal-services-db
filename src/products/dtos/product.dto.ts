import { IsString, IsBoolean, IsNumber, IsNotEmpty} from'class-validator';
import { PartialType} from'@nestjs/mapped-types'

export class ProductsDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  short_name: string;

  @IsString()
  mark: string;

  @IsString()
  model: string;

  @IsString()
  referenc: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsNumber()
  @IsNotEmpty()
  days_warranty: number;

  @IsString()
  @IsNotEmpty()
  sale_tax: string;

  @IsString()
  @IsNotEmpty()
  buy_tax: string;

  @IsNumber()
  @IsNotEmpty()
  rounding_type: number;

  costing_type: number;

  discount: number;

  @IsNumber()
  @IsNotEmpty()
  max_discount: number;

  @IsNumber()
  @IsNotEmpty()
  minimal_sale: number;

  @IsNumber()
  @IsNotEmpty()
  maximal_sale: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  origin: string;

  @IsBoolean()
  @IsNotEmpty()
  take_department_utility: boolean;

  @IsBoolean()
  @IsNotEmpty()
  allow_decimal: boolean;

  @IsBoolean()
  @IsNotEmpty()
  edit_name: boolean;

  @IsNumber()
  @IsNotEmpty()
  sale_price: number;

  @IsString()
  @IsNotEmpty()
  product_type: string;

  @IsString()
  @IsNotEmpty()
  technician: string;

  @IsBoolean()
  @IsNotEmpty()
  request_technician: boolean;

  @IsBoolean()
  @IsNotEmpty()
  serialized: boolean;

  @IsBoolean()
  @IsNotEmpty()
  request_details: boolean;

  @IsBoolean()
  @IsNotEmpty()
  request_amount: boolean;

  @IsString()
  @IsNotEmpty()
  coin: string;

  @IsBoolean()
  @IsNotEmpty()
  allow_negative_stock: boolean;

  @IsBoolean()
  @IsNotEmpty()
  use_scale: boolean;

  @IsBoolean()
  @IsNotEmpty()
  add_unit_description: boolean;

  @IsBoolean()
  @IsNotEmpty()
  use_lots: boolean;

  @IsNumber()
  @IsNotEmpty()
  lots_order: number;

  @IsNumber()
  @IsNotEmpty()
  minimal_stock: number;

  @IsBoolean()
  @IsNotEmpty()
  notify_minimal_stock: boolean;

  @IsString()
  size: string;

  @IsString()
  color: string;

  @IsBoolean()
  @IsNotEmpty()
  extract_net_from_unit_cost_plus_tax: boolean;

  extract_net_from_unit_price_plus_tax: boolean;

  @IsNumber()
  @IsNotEmpty()
  maximum_stock: number;
}

export class UpdateProductDto extends PartialType(ProductsDto) {}