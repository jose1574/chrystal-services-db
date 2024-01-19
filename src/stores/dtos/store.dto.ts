import { PartialType } from "@nestjs/mapped-types";
import { IsString} from "class-validator";

export class StoreDto {  
    @IsString()
    code: string;

    @IsString()
    description: string
}

export class UpdateStoreDto extends PartialType(StoreDto){}
