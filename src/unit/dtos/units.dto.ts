import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";

export class UnitsDto {
    @IsString()
    code: string;
    
    @IsString()
    description: string
}

export class UpdateUnitsDto extends PartialType(UnitsDto) {}
