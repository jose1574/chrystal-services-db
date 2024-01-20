import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class TownsDto {
  @IsString()
  code: string;

  @IsString()
  description: string;
}

export class UpdateTownsDto extends PartialType(TownsDto) {}