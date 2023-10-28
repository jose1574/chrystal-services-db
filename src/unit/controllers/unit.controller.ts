import {
    Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  NotFoundException    
} from '@nestjs/common';

import { UnitService } from '../services/unit.service';
import { UnitDto, UpdateUnitDto } from '../dtos/unit.dto';

@Controller('units')
export class UnitController {
    constructor(private unitService: UnitService) {}

    @Get()
    async find(): Promise<UnitDto[]> {
        return await this.unitService.find();
    }

    @Get(':id')
    async findOne(@Param('id') id:string):Promise<UnitDto> {
        const unit = await this.unitService.findOne(id);
        if(!unit) {
            throw new NotFoundException(`unidad con id #${id} no se encuentra`);
        }
        return unit;
    };

    @Post()
    async insert(@Body() body: UnitDto): Promise<UnitDto> {
        try {
            const unit = this.unitService.insert(body);
            return await unit;
          } catch (err) {
            throw new NotFoundException(
              'no se puede insertar la nuevo dato',
              `${err}`,
            );
          }
    };

    @Put(':id')
    async update(@Param('id') id: string, @Body() changes: UpdateUnitDto):Promise<UpdateUnitDto> {
        return this.unitService.update(id, changes);
    };
}
