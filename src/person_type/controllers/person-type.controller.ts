import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { PersonTypeService } from '../services/person-type.service';
import { PersonTypeDto, UpdatePersonTypeDto } from '../dto/person.dto';

@Controller('person-type')
export class PersonTypeController {
    constructor(private readonly personTypeService: PersonTypeService) {}

    @Get()
    async findAll(): Promise<PersonTypeDto[]> {
      return this.personTypeService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<PersonTypeDto> {
      return this.personTypeService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: PersonTypeDto[]): Promise<any> {
      return this.personTypeService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdatePersonTypeDto,
    ): Promise<UpdatePersonTypeDto> {
      return this.personTypeService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<PersonTypeDto> {
      return this.personTypeService.delete(id);
    }
}
