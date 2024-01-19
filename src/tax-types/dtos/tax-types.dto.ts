import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class TaxTypeDto {
  @IsNumber()
  code: number;

  @IsString()
  description: string;

  @IsNumber()
  fiscal_printer_position: number;

  @IsBoolean()
  status: boolean;
}

export class UpdateTaxesTypeDto extends PartialType(TaxTypeDto) {}
