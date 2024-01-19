import { Module } from '@nestjs/common';
import { MarksService } from './services/marks.service';
import { MarksController } from './controllers/marks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarksEntity } from './entities/marks.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MarksEntity])],
    controllers: [MarksController],
    providers: [MarksService]
})
export class MarksModule {}
