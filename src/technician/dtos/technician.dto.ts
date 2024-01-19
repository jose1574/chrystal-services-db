import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { StatusDto } from 'src/status/dtos/status.dto';

export class TechnicianDto {
  @IsNotEmpty()
  @IsString()
  readonly code: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly status: StatusDto;

  @IsNumber()
  @IsPositive()
  readonly percent_commission_maximum_price: number;

  @IsNumber()
  @IsPositive()
  readonly percent_commission_offer_price: number;

  @IsNumber()
  @IsPositive()
  readonly percent_commission_higher_price: number;

  @IsNumber()
  @IsPositive()
  readonly percent_commission_minimum_price: number;

  @IsNumber()
  @IsPositive()
  readonly percent_commission_variable_price: number;
}


export class UpdateTechnicianDto extends PartialType(TechnicianDto) {}