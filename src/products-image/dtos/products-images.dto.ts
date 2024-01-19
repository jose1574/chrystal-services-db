import { PartialType } from "@nestjs/mapped-types";
import { IsDefined, IsString } from "class-validator";
import { ProductsDto } from "src/products/dtos/product.dto";

export class ProductsImageDto {
    @IsString()
    main_code: ProductsDto;
  
    @IsString()
    image_type: string;  
    
    @IsDefined()
    product_image: Buffer; 
}

export class UpdateProductsImageDto extends PartialType(ProductsImageDto) {}