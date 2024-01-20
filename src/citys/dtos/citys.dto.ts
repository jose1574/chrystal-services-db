import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class CitysDto {
  @IsString()
  code: string;

  @IsString()
  description: string;
}

export class UpdateCitysDto extends PartialType(CitysDto) {}