import { IsString, IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class ProductsCodesDto {
  @IsString()
  @IsNotEmpty()
  main_code: string;

  @IsString()
  @IsNotEmpty()
  other_code: string;

  @IsString()
  @IsNotEmpty()
  code_type: string;
}

export class UpdateProductCodeDto extends PartialType(ProductsCodesDto) {}
