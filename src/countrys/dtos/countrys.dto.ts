import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";

export class CountrysDto {
    @IsString()
    code: string;

    @IsString()
    description: string;
}

export class UpdateCountrysDto extends PartialType(CountrysDto) {}