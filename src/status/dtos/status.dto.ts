import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class StatusDto {
  @IsNotEmpty()
  @IsString()
  readonly code: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly internal_use: boolean;
}

export class UpdateStatusDto extends PartialType(StatusDto) {}
