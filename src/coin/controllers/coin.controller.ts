import { Controller, Get, Post, Param, Put, Body, Delete } from '@nestjs/common';

import { CoinDto, UpdateCoinDto } from '../dtos/coin.dto';
import { CoinService } from '../services/coin.service';

@Controller('coin')
export class CoinController {
    constructor(private readonly coinService: CoinService) {}

    @Get()
    async findAll(): Promise<CoinDto[]> {
      return this.coinService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') code: string): Promise<CoinDto> {
      return this.coinService.findOneByCode(code);
    }
  
    @Post()
    async insert(@Body() data: CoinDto[]): Promise<any> {
      return this.coinService.insert(data);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() changes: UpdateCoinDto,
    ): Promise<UpdateCoinDto> {
      return this.coinService.update(id, changes);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<CoinDto> {
      return this.coinService.delete(id);
    }
}
