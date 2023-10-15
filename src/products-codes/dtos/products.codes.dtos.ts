import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";

export class ProductCodeDto {
  @IsString()
  main_code: string;

  @IsString()
  other_code: string;

  @IsString()
  code_type: string;
}

export class UpdateProductCodeDto extends PartialType(ProductCodeDto) {}