import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'cadm_j295788193',
            retryDelay:3000,
            autoLoadEntities: true
          }),
    ]
})
export class DatabaseModule {}
