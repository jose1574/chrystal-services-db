import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";

export class UnitDto {
    @IsString()
    code: string;
    
    @IsString()
    description: string
}

export class UpdateUnitDto extends PartialType(UnitDto) {}
