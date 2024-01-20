import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { ProviderService } from '../services/provider.service';
import { ProviderDto, UpdateProviderDto } from '../dtos/provider.dto';

@Controller('provider')
export class ProviderController {
    constructor(private readonly providerService: ProviderService) {}

    @Get()
    async findAll(): Promise<ProviderDto[]> {
      return this.providerService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<ProviderDto> {
      return this.providerService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: ProviderDto[]): Promise<any> {
      return this.providerService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateProviderDto,
    ): Promise<UpdateProviderDto> {
      return this.providerService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ProviderDto> {
      return this.providerService.delete(id);
    }
}
