import { IsString, IsNumber, IsNotEmpty } from "class-validator";
import { PartialType} from '@nestjs/mapped-types';

export class ProductsStockDto {
  @IsString()
  @IsNotEmpty({message: 'product code is required'})
  product_code: string;

  @IsString()
  @IsNotEmpty({ message: 'store is required' })
  store: string;

  @IsString()
  @IsNotEmpty({ message: 'locations is required' })
  locations: string;

  @IsNumber()
  @IsNotEmpty({ message: 'stock is required' }) 
  stock: number;

  @IsNumber()
  @IsNotEmpty({ message: 'ordered stock is required' })
  ordered_stock: number;

  @IsNumber()
  @IsNotEmpty({ message: 'committed stock is required' })
  committed_stock: number;
}

export class UpdateProductStock extends PartialType(ProductsStockDto) {}
