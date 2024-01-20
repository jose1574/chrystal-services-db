import { Module } from '@nestjs/common';
import { ProviderController } from './controllers/provider.controller';
import { ProviderService } from './services/provider.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProviderEntity } from './entities/provider.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProviderEntity])
  ],
  controllers: [ProviderController],
  providers: [ProviderService]
})
export class ProviderModule {}
