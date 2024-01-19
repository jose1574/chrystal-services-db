import { PartialType } from '@nestjs/mapped-types';
import { IsString  } from 'class-validator';

export class MarksDto {
  @IsString()
  code: string;

  @IsString()
  description: string;
}

export class UpdateMarksDto extends PartialType(MarksDto) {}
