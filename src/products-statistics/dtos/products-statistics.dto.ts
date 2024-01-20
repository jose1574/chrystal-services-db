import { PartialType } from "@nestjs/mapped-types";
import { IsDate, IsNumber, IsString } from "class-validator";
import { LocationDto } from "src/locations/dtos/location.dto";
import { ProductsDto } from "src/products/dtos/product.dto";
import { StoreDto } from "src/stores/dtos/store.dto";

export class ProductsStatisticsDto {
   @IsString()
      product_code: ProductsDto;
    
      @IsString()
      store: StoreDto;
    
     @IsString()
      locations: LocationDto;
    
      @IsDate()
      statistic_date: Date;
    
      @IsNumber()
      initial_stock: number;
    
      @IsNumber()
      load_amount: number;
    
      @IsNumber()
      download_amount: number;
    
      @IsNumber()
      load_amount_by_transfer: number;
    
      @IsNumber()
      download_amount_by_transfer: number;
    
      @IsNumber()
      load_amount_by_adjustment: number;
    
      @IsNumber()
      download_amount_by_adjustment: number;
    
      @IsNumber()
      sales_delivery_note_amount: number;
    
      @IsNumber()
      sales_bill_amount: number;
    
      @IsNumber()
      sales_devolution_amount: number;
    
      @IsNumber()
      sales_credit_note_amount: number;
    
      @IsNumber()
      shopping_delivery_note_amount: number;
    
      @IsNumber()
      shopping_bill_amount: number;
    
      @IsNumber()
      shopping_devolution_amount: number;
    
      @IsNumber()
      shopping_credit_note_amount: number;
    
      @IsNumber()
      final_stock: number;
    
      @IsNumber()
      unitary_cost: number;
    
      @IsNumber()
      average_cost: number;
    
      @IsNumber()
      calculated_cost: number;
    
      @IsNumber()
      maximum_price: number;
    
      @IsNumber()
      offer_price: number;
    
      @IsNumber()
      higher_price: number;
    
      @IsNumber()
      minimum_price: number;
    
      @IsString()
      period: string;
    
      @IsNumber()
      sales_income_amount: number;
    
      @IsNumber()
      internal_download_amount: number;
    
      @IsNumber()
      shopping_expense_amount: number;
}

export class UpdateProductsStatisticsDto extends PartialType(ProductsStatisticsDto) {}