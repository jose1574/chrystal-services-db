import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber } from 'class-validator';

export class DepartmentDto {
  @IsString()
  code: string;

  @IsString()
  description: string;

  @IsNumber()
  perc_maximum_price: number;

  @IsNumber()
  perc_minimum_price: number;

  @IsNumber()
  perc_offer_price: number;

  @IsNumber()
  perc_higher_price: number;

  @IsString()
  father_department: string;
}

export class UpdateDepartmentDto extends PartialType(DepartmentDto) {}
