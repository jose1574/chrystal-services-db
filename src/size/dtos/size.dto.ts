import { PartialType } from '@nestjs/mapped-types';
import { IsString  } from 'class-validator';

export class SizeDto {
  @IsString()
  code: string;

  @IsString()
  description: string;
}

export class UpdateSizeDto extends PartialType(SizeDto) {}
