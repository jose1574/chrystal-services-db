import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class PersonTypeDto {
  @IsString()
  code: string;

  @IsString()
  description: string;
}

export class UpdatePersonTypeDto extends PartialType(PersonTypeDto) {}