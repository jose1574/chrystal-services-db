import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SizeDto, UpdateSizeDto } from '../dtos/size.dto';
import { SizeService } from '../services/size.service';

@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Get()
  async findAll(): Promise<SizeDto[]> {
    return this.sizeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') code: string): Promise<SizeDto> {
    return this.sizeService.findOneByCode(code);
  }

  @Post()
  async insert(@Body() data: SizeDto[]): Promise<any> {
    return this.sizeService.insert(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() changes: UpdateSizeDto,
  ): Promise<UpdateSizeDto> {
    return this.sizeService.update(id, changes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<SizeDto> {
    return this.sizeService.delete(id);
  }
}
