import { Module } from '@nestjs/common';
import { CoinController } from './controllers/coin.controller';


import { CoinService } from './services/coin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoinEntity } from './entity/coin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoinEntity])
  ],
  controllers: [CoinController],
  providers: [CoinService]
})
export class CoinModule {}
