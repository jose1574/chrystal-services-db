import { PartialType} from '@nestjs/mapped-types'
import { IsNumber, IsString } from 'class-validator'
import { TaxTypeDto } from 'src/tax-types/dtos/tax-types.dto';


export class TaxesDto {
    @IsString()
    code: string;
  
    @IsString()
    description: string;
  
    @IsNumber()
    aliquot: number;
  
    @IsString()
    short_description: string;
  
   
    @IsNumber()
    line: TaxTypeDto;
  
    @IsNumber()
    status: boolean;
}

export class UpdateTaxesDto extends PartialType(TaxesDto) {}
