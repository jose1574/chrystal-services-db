import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class ProvincesDto {
  @IsString()
  code: string;

  @IsString()
  description: string;
}

export class UpdateProvincesDto extends PartialType(ProvincesDto) {}
