import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OriginService } from '../services/origin.service';
import { OriginDto, UpdateOriginDto } from '../dtos/origin.dto';

@Controller('origin')
export class OriginController {
    constructor(private readonly originService: OriginService) {}

    @Get()
    async findAll(): Promise<OriginDto[]> {
      return this.originService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<OriginDto> {
      return this.originService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: OriginDto[]): Promise<any> {
      return this.originService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateOriginDto,
    ): Promise<UpdateOriginDto> {
      return this.originService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<OriginDto> {
      return this.originService.delete(id);
    }
}
