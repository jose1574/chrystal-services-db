import { PartialType } from '@nestjs/mapped-types';
import { IsString} from 'class-validator';
import { StoreDto } from 'src/stores/dtos/store.dto';

export class LocationDto {
  @IsString()
  code: string;

  @IsString()
  description: string;

  @IsString()
  parent_store: StoreDto;
}

export class UpdateLocationDto extends PartialType(LocationDto) {}
