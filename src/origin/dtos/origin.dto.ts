import { PartialType} from '@nestjs/mapped-types'
import { IsString } from 'class-validator'


export class OriginDto {
    @IsString()
    code: string;
  
    @IsString()
    description: string;
}

export class UpdateOriginDto extends PartialType(OriginDto) {}