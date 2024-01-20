import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CitysDto } from "src/citys/dtos/citys.dto";
import { CountrysDto } from "src/countrys/dtos/countrys.dto";
import { PersonTypeDto } from "src/person_type/dto/person.dto";
import { ProvincesDto } from "src/provinces/dtos/provinces.dto";
import { TownsDto } from "src/towns/dtos/towns.dto";

export class ProviderDto {
    @IsString()
    code: string;
  
    @IsString()
    description: string;
  
    @IsString()
    address: string;
  
    @IsString()
    provider_id: string;
  
    @IsString()
    email: string;
  
    @IsString()
    phone: string;
  
    @IsString()
    contact: string;
  
    @IsString()
    country: CountrysDto;
  
    @IsString()
    province: ProvincesDto;
  
    @IsString()
    city: CitysDto;
  
    @IsString()
    town: TownsDto;
  
    @IsNumber()
    credit_days: number;
  
    @IsNumber()
    credit_limit: number;
  
    @IsString()
    provider_type: PersonTypeDto;
  
    @IsString()
    status: string;
  
    @IsNumber()
    domiciled: number;
  
    @IsNumber()
    percent_tax_retention: number;
  
    @IsNumber()
    percent_municipal_retention: number;
  
    @IsNumber()
    retention_tax_agent: boolean;
  
    @IsNumber()
    retention_municipal_agent: boolean;
  
    @IsNumber()
    retention_islr_agent: boolean;
  
    @IsNumber()
    perception_igtf_agent: boolean;
}

export class UpdateProviderDto extends PartialType(ProviderDto) {}