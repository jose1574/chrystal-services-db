import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';

import { LocationsService } from '../services/locations.service';
import { LocationDto, UpdateLocationDto } from '../dtos/location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  async findAll(): Promise<LocationDto[]> {
    return this.locationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<LocationDto> {
    return this.locationsService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: LocationDto[]): Promise<any> {
    return this.locationsService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateLocationDto,
  ): Promise<UpdateLocationDto> {
    return this.locationsService.update(id, changes);
  }
}
