import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
} from '@nestjs/common';

import { StoreDto, UpdateStoreDto } from '../dtos/store.dto';
import { StoresService } from '../services/stores.service';

@Controller('stores')
export class StoresController {
  constructor(private readonly storeService: StoresService) {}

  @Get()
  async findAll(): Promise<StoreDto[]> {
    return await this.storeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StoreDto> {
    return this.storeService.findOneByCode(id);
  }

  @Post()
  async create(@Body() body: StoreDto[]): Promise<any> {
    return this.storeService.insert(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateStoreDto,
  ): Promise<UpdateStoreDto> {
    return this.storeService.update(id, changes);
  }
}
